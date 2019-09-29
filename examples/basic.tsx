import '../assets/index.less';
import React from 'react';
import ResizeObserver from '../src';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

  const onResize = () => {
    setTimes(prevTimes => prevTimes + 1);
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
        </div>
        <ResizeObserver onResize={onResize} disabled={disabled}>
          <textarea ref={textareaRef} placeholder="I'm a textarea!" />
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
