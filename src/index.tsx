import * as React from 'react';
import toArray from 'rc-util/lib/Children/toArray';
import SingleObserver from './SingleObserver';

const INTERNAL_PREFIX_KEY = 'rc-observer-key';

export interface ResizeObserverProps {
  children: React.ReactNode;
  disabled?: boolean;
  /** Trigger if element resized. Will always trigger when first time render. */
  onResize?: (
    size: {
      width: number;
      height: number;
      offsetWidth: number;
      offsetHeight: number;
    },
    element: HTMLElement,
  ) => void;
}

export default function ResizeObserver(props: ResizeObserverProps) {
  const { children } = props;
  const childNodes = toArray(children);

  return childNodes.map((child, index) => {
    const key = child?.key || `${INTERNAL_PREFIX_KEY}-${index}`;
    return (
      <SingleObserver {...props} key={key}>
        {child}
      </SingleObserver>
    );
  });
}
