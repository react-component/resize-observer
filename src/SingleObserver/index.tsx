import { getDOM } from '@rc-component/util/lib/Dom/findDOMNode';
import { supportRef, useComposeRef, getNodeRef } from '@rc-component/util/lib/ref';
import * as React from 'react';
import type { ResizeObserverProps, SizeInfo } from '..';
import { CollectionContext } from '../Collection';
import useResizeObserver from '../useResizeObserver';

export interface SingleObserverProps extends ResizeObserverProps {
  children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}

function SingleObserver(props: SingleObserverProps, ref: React.Ref<HTMLElement>) {
  const { children, disabled, onResize, data } = props;
  const elementRef = React.useRef<Element>(null);

  const onCollectionResize = React.useContext(CollectionContext);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? getNodeRef(mergedChildren) : null;

  const mergedRef = useComposeRef(originRef, elementRef);

  const getDomElement = () => {
    return getDOM(elementRef.current) as HTMLElement;
  };

  React.useImperativeHandle(ref, () => getDomElement());

  // =========================== Observe ============================
  useResizeObserver(!disabled, getDomElement, onResize, (sizeInfo, target) => {
    onCollectionResize?.(sizeInfo, target, data);
  });

  // ============================ Render ============================
  return canRef
    ? React.cloneElement(mergedChildren as any, {
        ref: mergedRef,
      })
    : mergedChildren;
}

const RefSingleObserver = React.forwardRef(SingleObserver);

if (process.env.NODE_ENV !== 'production') {
  RefSingleObserver.displayName = 'SingleObserver';
}

export default RefSingleObserver;
