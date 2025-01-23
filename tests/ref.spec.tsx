import { render } from '@testing-library/react';
import React from 'react';
import ResizeObserver from '../src';

describe('ResizeObserver.ref', () => {
  it('support nativeElement', () => {
    const My = React.forwardRef((_, ref) => {
      const divRef = React.useRef<HTMLDivElement>(null);

      React.useImperativeHandle(ref, () => ({
        nativeElement: divRef.current,
      }));

      return <div ref={divRef} className="little" />;
    });

    const resizeRef = React.createRef<HTMLDivElement>();

    const { container } = render(
      <ResizeObserver ref={resizeRef}>
        <My />
      </ResizeObserver>,
    );

    expect(resizeRef.current).toEqual(container.querySelector('.little'));
  });

  it('should return null when forward ref is invalid', () => {
    const My = React.forwardRef((_, ref) => {
      React.useImperativeHandle(ref, () => 233);

      return <div className="little" />;
    });

    const resizeRef = React.createRef<HTMLDivElement>();

    render(
      <ResizeObserver ref={resizeRef}>
        <My />
      </ResizeObserver>,
    );

    expect(resizeRef.current).toBeNull();
  });

  it('should support nativeElement', () => {
    const My = React.forwardRef((_, ref) => {
      const domRef = React.useRef<HTMLDivElement>(null);
      React.useImperativeHandle(ref, () => ({
        nativeElement: domRef.current,
      }));

      return <div ref={domRef} className="little" />;
    });

    const resizeRef = React.createRef<HTMLDivElement>();

    const { container } = render(
      <ResizeObserver ref={resizeRef}>
        <My />
      </ResizeObserver>,
    );

    expect(resizeRef.current).toBe(container.querySelector('.little'));
  });
});
