import '../assets/index.less';
import React from 'react';
import type { OnResizeHandler } from '../src/OnResizeHandler';
import { useResizeObserver } from '../src/useResizeObserver';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const onResize: OnResizeHandler = ({ width, height, offsetWidth, offsetHeight }) => {
    setTimes((prevTimes) => prevTimes + 1);
    console.log(
      'Resize:',
      '\n',
      'BoundingBox',
      width,
      height,
      '\n',
      'Offset',
      offsetWidth,
      offsetHeight,
    );
  };

  useResizeObserver({ ref: textareaRef, onResize, disabled });

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

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
        <textarea ref={textareaRef} placeholder="I'm a textarea!" />
      </div>
    </React.StrictMode>
  );
}
