import { render } from '@testing-library/react';
import React from 'react';
import ResizeObserver, { _rs as triggerResize } from '../src';
import { _el as elementListeners } from '../src/utils/observerUtil';
import { spyElementPrototypes } from './utils/domHook';

const waitPromise = () => Promise.resolve();

describe('ResizeObserver', () => {
  let errorSpy;
  let domSpy;
  let mockWidth;
  let mockHeight;
  let mockOffsetWidth;
  let mockOffsetHeight;

  beforeAll(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => null);
    domSpy = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        width: mockWidth,
        height: mockHeight,
      }),
      offsetWidth: {
        get: () => mockOffsetWidth,
      },
      offsetHeight: {
        get: () => mockOffsetHeight,
      },
    });
  });

  beforeEach(() => {
    errorSpy.mockReset();
  });

  afterAll(() => {
    errorSpy.mockRestore();
    domSpy.mockRestore();
  });

  describe('children count warning', () => {
    it('without children', () => {
      render(<ResizeObserver />);

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: `children` of ResizeObserver is empty. Nothing is in observe.',
      );
    });

    it('multiple children', () => {
      const { container } = render(
        <ResizeObserver>
          <div data-name="first" key="exist-key" />
          <div />
        </ResizeObserver>,
      );

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.',
      );

      expect(container.querySelector('div')?.getAttribute('data-name')).toEqual('first');
    });
  });

  describe('child ref should support', () => {
    it('function', () => {
      const refFunc = jest.fn();
      render(
        <ResizeObserver>
          <div ref={refFunc} />
        </ResizeObserver>,
      );

      expect(refFunc).toHaveBeenCalledWith(expect.anything());
    });

    it('object', () => {
      const ref = React.createRef();
      render(
        <ResizeObserver>
          <div ref={ref} />
        </ResizeObserver>,
      );

      expect(ref.current).toBeTruthy();
    });
  });

  describe('onResize', () => {
    it('basic', async () => {
      const onResize = jest.fn();
      const { container } = render(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      triggerResize([{ target: container.firstElementChild }]);
      await waitPromise();
      expect(onResize).toHaveBeenCalled();
    });

    it('trigger when offset change', async () => {
      mockHeight = 0;
      mockWidth = 0;
      mockOffsetHeight = 0;
      mockOffsetWidth = 0;

      const onResize = jest.fn();
      const { container } = render(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      // Init
      triggerResize([{ target: container.firstElementChild }]);
      await waitPromise();
      onResize.mockReset();

      // Not trigger when not change
      triggerResize([{ target: container.firstElementChild }]);
      await waitPromise();
      expect(onResize).not.toHaveBeenCalled();

      // Trigger when offset changed
      mockOffsetWidth = 1023;
      triggerResize([{ target: container.firstElementChild }]);
      await waitPromise();
      expect(onResize).toHaveBeenCalled();
    });

    it('accuracy if possible', async () => {
      mockHeight = 10;
      mockWidth = 10.03;
      mockOffsetHeight = 10;
      mockOffsetWidth = 10;

      const onResize = jest.fn();
      const { container } = render(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      triggerResize([{ target: container.firstElementChild }]);
      await waitPromise();

      expect(onResize).toHaveBeenCalledWith(
        expect.objectContaining({
          offsetWidth: 10.03,
        }),
        expect.anything(),
      );
    });
  });

  it('disabled should not trigger onResize', () => {
    const { container, rerender } = render(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );

    rerender(
      <ResizeObserver disabled>
        <div />
      </ResizeObserver>,
    );
    expect(elementListeners.get(container.firstElementChild)).toBeFalsy();
  });

  it('unmount to clear', () => {
    const { container, unmount } = render(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );
    const dom = container.firstElementChild;
    expect(elementListeners.get(dom)).toBeTruthy();

    // Unmount
    unmount();
    expect(elementListeners.get(dom)).toBeFalsy();
  });

  describe('work with child type', () => {
    it('function component', () => {
      const FC = () => <div />;
      render(
        <ResizeObserver>
          <FC />
        </ResizeObserver>,
      );
      expect(errorSpy).not.toHaveBeenCalled();
    });

    it('forwardRef function component', () => {
      const FRC = React.forwardRef(() => <div />);
      render(
        <ResizeObserver>
          <FRC />
        </ResizeObserver>,
      );
      expect(errorSpy).not.toHaveBeenCalled();
    });

    it('class component', () => {
      class CC extends React.Component {
        state = {};

        render() {
          return null;
        }
      }
      render(
        <ResizeObserver>
          <CC />
        </ResizeObserver>,
      );
      expect(errorSpy).not.toHaveBeenCalled();
    });
  });

  it('should not listen even not ref-able', async () => {
    const Wrapper = props => <>{props.children}</>;
    const onResize = jest.fn();

    const { container } = render(
      <ResizeObserver onResize={onResize}>
        <Wrapper>
          <div />
        </Wrapper>
      </ResizeObserver>,
    );

    triggerResize([{ target: container.querySelector('div') }]);
    await waitPromise();

    expect(onResize).not.toHaveBeenCalled();
  });

  it('support renderProps', () => {
    const { container } = render(
      <ResizeObserver>{ref => <div ref={ref} className="block" />}</ResizeObserver>,
    );

    expect(container.querySelector('.block')).toBeTruthy();
  });

  it('ref-able', () => {
    const domRef = React.createRef();

    const { container } = render(
      <ResizeObserver ref={domRef}>
        <div className="block" />
      </ResizeObserver>,
    );

    expect(domRef.current instanceof HTMLDivElement).toBeTruthy();
    expect(domRef.current).toBe(container.querySelector('div.block'));
  });
});
