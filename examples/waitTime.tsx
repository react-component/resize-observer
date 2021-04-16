import '../assets/index.less';
import React, { useState } from 'react';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [debounce, setDebounce] = useState(100);
  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
    setTimeout(() => {
      setDebounce(10000);
    }, 10000);
  }, []);

  const onResize = ({ width, height }: { width: number; height: number }) => {
    setTimes(prevTimes => prevTimes + 1);
    console.log('Resize:', width, height);
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
          <span>Resize times: {times}</span>
          <br />
          debounce：{debounce}
        </div>
        <ResizeObserver
          onResize={onResize}
          disabled={disabled}
          debounce={debounce}
        >
          <textarea ref={textareaRef} placeholder="I'm a textarea!" />
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
