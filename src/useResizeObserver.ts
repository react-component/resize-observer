import * as React from 'react';
import type { OnResize, SizeInfo } from '.';
import { observe, unobserve } from './utils/observerUtil';
import { useEvent } from '@rc-component/util';

export default function useResizeObserver(
  enabled: boolean,
  getTarget: () => HTMLElement,
  onDelayResize?: OnResize,
  onSyncResize?: OnResize,
) {
  // ============================= Size =============================
  const sizeRef = React.useRef<SizeInfo>({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  // =========================== Observe ============================

  // Handler
  const onInternalResize = useEvent((target: HTMLElement) => {
    const { width, height } = target.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = target;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight };
      sizeRef.current = size;

      // IE is strange, right?
      const mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      const mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;

      const sizeInfo = {
        ...size,
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight,
      };

      // Call the callback immediately, let the caller decide whether to defer
      // onResize(sizeInfo, target);
      onSyncResize?.(sizeInfo, target);

      // defer the callback but not defer to next frame
      Promise.resolve().then(() => {
        onDelayResize?.(sizeInfo, target);
      });
    }
  });

  // Dynamic observe
  React.useEffect(() => {
    const target = getTarget();

    if (target && enabled) {
      observe(target, onInternalResize);
    }

    return () => {
      if (target) {
        unobserve(target, onInternalResize);
      }
    };
  }, [enabled, getTarget]);
}
