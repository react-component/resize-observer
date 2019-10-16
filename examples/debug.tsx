import '../assets/index.less';
import React from 'react';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const onResize = (size: { width: number; height: number }) => {
    setTimes(prevTimes => prevTimes + 1);
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <React.StrictMode>
      <div>
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
          <span>
            Resize times: {times} ({width}/{height})
          </span>
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          <textarea placeholder="I'm a textarea!" />
          <button type="button">Warning with multiple children</button>
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
