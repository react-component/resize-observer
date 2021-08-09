import * as React from 'react';
import type { OnResizeHandler } from './OnResizeHandler';
import type { Size } from './Size';

export interface UseResizeObserverArgs {
  ref: React.RefObject<React.ReactNode>;
  onResize?: OnResizeHandler;
  disabled?: boolean;
}

export function useResizeObserver({
  ref,
  onResize: resizeHandler,
  disabled,
}: UseResizeObserverArgs): Size {
  const observerRef = React.useRef<ResizeObserver>();
  const elementRef = React.useRef<HTMLElement>();

  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const [offsetWidth, setOffsetWidth] = React.useState(0);

  const destroyObserver = React.useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, [observerRef]);

  const onResize = React.useCallback(
    (entries: ResizeObserverEntry[]): void => {
      const target = entries[0].target as HTMLElement;

      const { width: _width, height: _height } = target.getBoundingClientRect();
      const { offsetWidth: _offsetWidth, offsetHeight: _offsetHeight } = target;

      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */
      const fixedWidth = Math.floor(_width);
      const fixedHeight = Math.floor(_height);

      if (
        width !== fixedWidth ||
        height !== fixedHeight ||
        offsetWidth !== _offsetWidth ||
        offsetHeight !== _offsetHeight
      ) {
        setHeight(fixedHeight);
        setWidth(fixedWidth);
        setOffsetHeight(_offsetHeight);
        setOffsetWidth(_offsetWidth);

        if (resizeHandler) {
          Promise.resolve().then(() => {
            resizeHandler(
              {
                width: fixedWidth,
                height: fixedHeight,
                offsetWidth: _offsetWidth,
                offsetHeight: _offsetHeight,
              },
              target,
            );
          });
        }
      }
    },
    [width, height, offsetWidth, offsetHeight, resizeHandler],
  );

  const repopulateObserver = React.useCallback(() => {
    if (disabled) {
      destroyObserver();
      return;
    }

    const element = ref.current as HTMLElement;
    const elementChanged = element !== elementRef.current;
    if (elementChanged) {
      destroyObserver();
      elementRef.current = element;
    }

    if (!observerRef.current && element) {
      observerRef.current = new ResizeObserver(onResize);
      observerRef.current.observe(element);
    }
  }, [destroyObserver, disabled, onResize, ref]);

  React.useEffect(() => {
    repopulateObserver();

    // eslint-disable-next-line consistent-return
    return () => {
      destroyObserver();
    };
  }, [repopulateObserver, destroyObserver]);

  return {
    width,
    height,
    offsetWidth,
    offsetHeight,
  };
}

export default useResizeObserver;
