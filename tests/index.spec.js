import React from 'react';
import { mount } from 'enzyme';
import 'regenerator-runtime';
import ResizeObserver from '../src';
import { spyElementPrototypes } from './utils/domHook';
import { _el as elementListeners } from '../src/utils/observerUtil';

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
      mount(<ResizeObserver />);

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: `children` of ResizeObserver is empty. Nothing is in observe.',
      );
    });

    it('multiple children', () => {
      const wrapper = mount(
        <ResizeObserver>
          <div key="exist-key" />
          <div />
        </ResizeObserver>,
      );

      expect(errorSpy).toHaveBeenCalledWith(
        'Warning: Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.',
      );

      expect(wrapper.find('div').first().key()).toEqual('exist-key');
    });
  });

  describe('child ref should support', () => {
    it('function', () => {
      const refFunc = jest.fn();
      mount(
        <ResizeObserver>
          <div ref={refFunc} />
        </ResizeObserver>,
      );

      expect(refFunc).toHaveBeenCalledWith(expect.anything());
    });

    it('object', () => {
      const ref = React.createRef();
      mount(
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
      const wrapper = mount(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      wrapper.triggerResize();
      await Promise.resolve();
      expect(wrapper.exists('DomWrapper')).toBeTruthy(); // Dom exist
      expect(onResize).toHaveBeenCalled();
    });

    it('trigger when offset change', async () => {
      mockHeight = 0;
      mockWidth = 0;
      mockOffsetHeight = 0;
      mockOffsetWidth = 0;

      const onResize = jest.fn();
      const wrapper = mount(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      // Init
      wrapper.triggerResize();
      await Promise.resolve();
      onResize.mockReset();

      // Not trigger when not change
      wrapper.triggerResize();
      await Promise.resolve();
      expect(onResize).not.toHaveBeenCalled();

      // Trigger when offset changed
      mockOffsetWidth = 1023;
      wrapper.triggerResize();
      await Promise.resolve();
      expect(onResize).toHaveBeenCalled();
    });

    it('accuracy if possible', async () => {
      mockHeight = 10;
      mockWidth = 10.03;
      mockOffsetHeight = 10;
      mockOffsetWidth = 10;

      const onResize = jest.fn();
      const wrapper = mount(
        <ResizeObserver onResize={onResize}>
          <div />
        </ResizeObserver>,
      );

      wrapper.triggerResize();
      await Promise.resolve();

      expect(onResize).toHaveBeenCalledWith(
        expect.objectContaining({
          offsetWidth: 10.03,
        }),
        expect.anything(),
      );
    });
  });

  it('disabled should not trigger onResize', () => {
    const wrapper = mount(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );

    wrapper.setProps({ disabled: true });
    expect(elementListeners.get(wrapper.getDOMNode())).toBeFalsy();
  });

  it('unmount to clear', () => {
    const wrapper = mount(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );
    const dom = wrapper.getDOMNode();
    expect(elementListeners.get(dom)).toBeTruthy();

    // Unmount
    wrapper.unmount();
    expect(elementListeners.get(dom)).toBeFalsy();
  });

  describe('work with child type', () => {
    it('function component', () => {
      const FC = () => <div />;
      mount(
        <ResizeObserver>
          <FC />
        </ResizeObserver>,
      );
      expect(errorSpy).not.toHaveBeenCalled();
    });

    it('forwardRef function component', () => {
      const FRC = React.forwardRef(() => <div />);
      mount(
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
      mount(
        <ResizeObserver>
          <CC />
        </ResizeObserver>,
      );
      expect(errorSpy).not.toHaveBeenCalled();
    });
  });

  it('should listen even not ref-able', async () => {
    const Wrapper = props => <>{props.children}</>;
    const onResize = jest.fn();

    const wrapper = mount(
      <ResizeObserver onResize={onResize}>
        <Wrapper>
          <div />
        </Wrapper>
      </ResizeObserver>,
    );

    wrapper.triggerResize();
    await Promise.resolve();

    expect(onResize).toHaveBeenCalled();
  });

  it('support renderProps', () => {
    const wrapper = mount(
      <ResizeObserver>{ref => <div ref={ref} className="block" />}</ResizeObserver>,
    );

    expect(wrapper.exists('.block')).toBeTruthy();
  });

  it('ref-able', () => {
    const domRef = React.createRef();

    const wrapper = mount(
      <ResizeObserver ref={domRef}>
        <div className="block" />
      </ResizeObserver>,
    );

    expect(domRef.current instanceof HTMLDivElement).toBeTruthy();
    expect(domRef.current).toBe(wrapper.find('div.block').getDOMNode());
  });
});
