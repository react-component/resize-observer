import { fireEvent, render, waitFor } from '@testing-library/react';
import { useEvent } from '@rc-component/util';
import React from 'react';
import { useResizeObserver } from '../src';
import { _el as elementListeners } from '../src/utils/observerUtil';

describe('useResizeObserver', () => {
  it('should observe latest element when target getter closes over stateful ref value', async () => {
    function Demo() {
      const [element, setElement] = React.useState<HTMLElement | null>(null);
      // `useEvent` keeps the getter identity stable while the closed-over DOM node
      // comes from state. If the hook only checks the function reference, it misses
      // the later state update from `null` to the actual element and never observes it.
      const getTarget = useEvent(() => element as HTMLElement);

      useResizeObserver(true, getTarget);

      return <div ref={setElement} data-testid="target" />;
    }

    const { getByTestId } = render(<Demo />);
    const target = getByTestId('target');

    await waitFor(() => {
      // Once the ref callback stores the DOM into state, the latest element should
      // still be observed even though the getter function itself never changes.
      expect(elementListeners.get(target)).toBeTruthy();
    });
  });

  it('should switch observation when a stable getter resolves to a different element', async () => {
    function Demo() {
      const firstRef = React.useRef<HTMLDivElement>(null);
      const secondRef = React.useRef<HTMLDivElement>(null);
      const [useSecond, setUseSecond] = React.useState(false);
      const getTarget = useEvent(() => (useSecond ? secondRef.current : firstRef.current));

      useResizeObserver(true, getTarget as () => HTMLElement);

      return (
        <>
          <button type="button" onClick={() => setUseSecond(true)}>
            switch
          </button>
          <div ref={firstRef} data-testid="first" />
          <div ref={secondRef} data-testid="second" />
        </>
      );
    }

    const { getByRole, getByTestId } = render(<Demo />);
    const first = getByTestId('first');
    const second = getByTestId('second');

    await waitFor(() => {
      expect(elementListeners.get(first)).toBeTruthy();
    });

    fireEvent.click(getByRole('button', { name: 'switch' }));

    await waitFor(() => {
      expect(elementListeners.get(first)).toBeFalsy();
      expect(elementListeners.get(second)).toBeTruthy();
    });
  });
});
