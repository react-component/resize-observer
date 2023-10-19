import findDOMNode from 'rc-util/lib/Dom/findDOMNode';
import { supportRef, useComposeRef } from 'rc-util/lib/ref';
import * as React from 'react';
import type { ResizeObserverProps } from '..';
import { CollectionContext } from '../Collection';
import { observe, unobserve } from '../utils/observerUtil';
import DomWrapper from './DomWrapper';

export interface SingleObserverProps extends ResizeObserverProps {
  children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}

function SingleObserver(props: SingleObserverProps, ref: React.Ref<HTMLElement>) {
  const { children, disabled } = props;
  const elementRef = React.useRef<Element>(null);
  const wrapperRef = React.useRef<DomWrapper>(null);

  const onCollectionResize = React.useContext(CollectionContext);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  const sizeRef = React.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? (mergedChildren as any).ref : null;

  const mergedRef = useComposeRef(originRef, elementRef);

  const getDom = () =>
    findDOMNode<HTMLElement>(elementRef.current) ||
    // Support `nativeElement` format
    (elementRef.current && typeof elementRef.current === 'object'
      ? findDOMNode<HTMLElement>((elementRef.current as any)?.nativeElement)
      : null) ||
    findDOMNode<HTMLElement>(wrapperRef.current);

  React.useImperativeHandle(ref, () => getDom());

  // =========================== Observe ============================
  const propsRef = React.useRef<SingleObserverProps>(props);
  propsRef.current = props;

  // Handler
  const onInternalResize = React.useCallback((target: HTMLElement) => {
    const { onResize, data } = propsRef.current;

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

      // Let collection know what happened
      onCollectionResize?.(sizeInfo, target, data);

      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(() => {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  React.useEffect(() => {
    const currentElement: HTMLElement = getDom();

    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }

    return () => unobserve(currentElement, onInternalResize);
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return (
    <DomWrapper ref={wrapperRef}>
      {canRef
        ? React.cloneElement(mergedChildren as any, {
            ref: mergedRef,
          })
        : mergedChildren}
    </DomWrapper>
  );
}

const RefSingleObserver = React.forwardRef(SingleObserver);

if (process.env.NODE_ENV !== 'production') {
  RefSingleObserver.displayName = 'SingleObserver';
}

export default RefSingleObserver;
