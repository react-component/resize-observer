import * as React from 'react';
import type { SizeInfo } from '.';

type onCollectionResize = (size: SizeInfo, element: HTMLElement, data: any) => void;

export const CollectionContext = React.createContext<onCollectionResize>(null);

export interface ResizeInfo {
  size: SizeInfo;
  data: any;
  element: HTMLElement;
}

export interface CollectionProps {
  /** Trigger when some children ResizeObserver changed. Collect by frame render level */
  onBatchResize?: (resizeInfo: ResizeInfo[]) => void;
  children?: React.ReactNode;
}

/**
 * Collect all the resize event from children ResizeObserver
 */
export function Collection({ children, onBatchResize }: CollectionProps) {
  const resizeIdRef = React.useRef(0);
  const resizeInfosRef = React.useRef<ResizeInfo[]>([]);

  const onCollectionResize = React.useContext(CollectionContext);

  const onResize = React.useCallback<onCollectionResize>(
    (size, element, data) => {
      resizeIdRef.current += 1;
      const currentId = resizeIdRef.current;

      resizeInfosRef.current.push({
        size,
        element,
        data,
      });

      Promise.resolve().then(() => {
        if (currentId === resizeIdRef.current) {
          onBatchResize?.(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });

      // Continue bubbling if parent exist
      onCollectionResize?.(size, element, data);
    },
    [onBatchResize, onCollectionResize],
  );

  return <CollectionContext.Provider value={onResize}>{children}</CollectionContext.Provider>;
}
