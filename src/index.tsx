import * as React from 'react';
import toArray from '@rc-component/util/lib/Children/toArray';
import { warning } from '@rc-component/util/lib/warning';
import SingleObserver from './SingleObserver';
import { Collection } from './Collection';

const INTERNAL_PREFIX_KEY = 'rc-observer-key';

import { _rs } from './utils/observerUtil';
export {
  /** @private Test only for mock trigger resize event */
  _rs,
};

export interface SizeInfo {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
}

export type OnResize = (size: SizeInfo, element: HTMLElement) => void;

export interface ResizeObserverProps {
  /** Pass to ResizeObserver.Collection with additional data */
  data?: any;
  children: React.ReactNode | ((ref: React.RefObject<any>) => React.ReactElement);
  disabled?: boolean;
  /** Trigger if element resized. Will always trigger when first time render. */
  onResize?: OnResize;
}

function ResizeObserver(props: ResizeObserverProps, ref: React.Ref<HTMLElement>) {
  const { children } = props;
  const childNodes = typeof children === 'function' ? [children] : toArray(children);

  if (process.env.NODE_ENV !== 'production') {
    if (childNodes.length > 1) {
      warning(
        false,
        'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.',
      );
    } else if (childNodes.length === 0) {
      warning(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
    }
  }

  return childNodes.map((child, index) => {
    const key = child?.key || `${INTERNAL_PREFIX_KEY}-${index}`;
    return (
      <SingleObserver {...props} key={key} ref={index === 0 ? ref : undefined}>
        {child}
      </SingleObserver>
    );
  }) as any as React.ReactElement;
}

const RefResizeObserver = React.forwardRef(ResizeObserver) as React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ResizeObserverProps> & React.RefAttributes<any>
> & {
  Collection: typeof Collection;
};

if (process.env.NODE_ENV !== 'production') {
  RefResizeObserver.displayName = 'ResizeObserver';
}

RefResizeObserver.Collection = Collection;

export default RefResizeObserver;
