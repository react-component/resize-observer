import '../assets/index.less';
import React from 'react';
import type { ResizeObserverProps } from '../src';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const onResize: ResizeObserverProps['onResize'] = () => {
    setTimes(prevTimes => prevTimes + 1);
  };

  return (
    <React.StrictMode>
      <div style={{ transform: 'scale(1.1)', transformOrigin: '0% 0%' }}>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setDisabled(!disabled);
              }}
              checked={disabled}
            />{' '}
            Disabled Observe
          </label>
          {' >>> '}
          <span>Resize times: {times}</span>
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          {resizeRef => (
            <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <textarea placeholder="I'm a textarea!" />
              <div ref={resizeRef} style={{ background: 'red', height: 50, fontSize: 10 }}>
                Target
              </div>
            </div>
          )}
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
