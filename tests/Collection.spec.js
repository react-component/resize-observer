import React from 'react';
import { mount } from 'enzyme';
import 'regenerator-runtime';
import ResizeObserver from '../src';
import { spyElementPrototypes } from './utils/domHook';

describe('ResizeObserver.Collection', () => {
  let domSpy;
  let mockWidth;
  let mockHeight;
  let mockOffsetWidth;
  let mockOffsetHeight;

  beforeAll(() => {
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

  afterAll(() => {
    domSpy.mockRestore();
  });

  it('batch collection', async () => {
    const onBatchResize = jest.fn();

    const wrapper = mount(
      <ResizeObserver.Collection onBatchResize={onBatchResize}>
        <ResizeObserver>
          <div id="div1" />
        </ResizeObserver>
        <ResizeObserver>
          <div id="div2" />
        </ResizeObserver>
      </ResizeObserver.Collection>,
    );

    // Resize div1
    wrapper.triggerResize(0);
    await Promise.resolve();
    expect(onBatchResize).toHaveBeenCalledWith([
      expect.objectContaining({ element: wrapper.find('#div1').getDOMNode() }),
    ]);

    // Resize both
    onBatchResize.mockReset();
    wrapper.triggerResize(0);
    wrapper.triggerResize(1);
    await Promise.resolve();
    expect(onBatchResize).toHaveBeenCalledWith([
      expect.objectContaining({ element: wrapper.find('#div1').getDOMNode() }),
      expect.objectContaining({ element: wrapper.find('#div2').getDOMNode() }),
    ]);

    // Resize div2
    onBatchResize.mockReset();
    wrapper.triggerResize(1);
    await Promise.resolve();
    expect(onBatchResize).toHaveBeenCalledWith([
      expect.objectContaining({ element: wrapper.find('#div2').getDOMNode() }),
    ]);
  });
});
