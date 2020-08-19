import React from 'react';
import { mount } from 'enzyme';
import 'regenerator-runtime';
import ResizeObserver from '../src';
import { spyElementPrototypes } from './utils/domHook';

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
        'Warning: Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
      );

      expect(
        wrapper
          .find('div')
          .first()
          .key(),
      ).toEqual('exist-key');
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
      expect(wrapper.instance().currentElement).toBeTruthy();
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
  });

  it('disabled should not trigger onResize', () => {
    const wrapper = mount(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );

    wrapper.setProps({ disabled: true });
    expect(wrapper.findObserver().instance().resizeObserver).toBeFalsy();
  });

  it('unmount to clear', () => {
    const wrapper = mount(
      <ResizeObserver>
        <div />
      </ResizeObserver>,
    );

    const instance = wrapper.findObserver().instance();
    wrapper.unmount();
    expect(instance.resizeObserver).toBeFalsy();
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
});
