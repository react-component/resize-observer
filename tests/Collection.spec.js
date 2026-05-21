import { render } from '@testing-library/react';
import React from 'react';
import ResizeObserver, { _rs as triggerResize } from '../src';
import { spyElementPrototypes } from './utils/domHook';

const waitPromise = () => Promise.resolve();

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

    const { container } = render(
      <ResizeObserver.Collection onBatchResize={onBatchResize}>
        <ResizeObserver>
          <div id="div1" />
        </ResizeObserver>
        <ResizeObserver>
          <div id="div2" />
        </ResizeObserver>
      </ResizeObserver.Collection>,
    );

    const div1 = container.querySelector('#div1');
    const div2 = container.querySelector('#div2');

    await waitPromise();
    onBatchResize.mockReset();

    // Resize div1
    triggerResize([{ target: div1 }]);
    await waitPromise();
    expect(onBatchResize).toHaveBeenCalledWith([expect.objectContaining({ element: div1 })]);

    // Resize both
    onBatchResize.mockReset();
    triggerResize([{ target: div1 }]);
    triggerResize([{ target: div2 }]);
    await waitPromise();
    expect(onBatchResize).toHaveBeenCalledWith([
      expect.objectContaining({ element: div1 }),
      expect.objectContaining({ element: div2 }),
    ]);

    // Resize div2
    onBatchResize.mockReset();
    triggerResize([{ target: div2 }]);
    await waitPromise();
    expect(onBatchResize).toHaveBeenCalledWith([expect.objectContaining({ element: div2 })]);
  });
});
