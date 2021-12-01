import '../assets/index.less';
import React from 'react';
import type { ResizeObserverProps } from '../src';
import ResizeObserver from '../src';

const Wrapper = ({ children }: any) => <>{children}</>;

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

  const onResize: ResizeObserverProps['onResize'] = ({
    width,
    height,
    offsetHeight,
    offsetWidth,
  }) => {
    setTimes(prevTimes => prevTimes + 1);
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
          <Wrapper>
            <textarea ref={textareaRef} placeholder="I'm a textarea!" />
          </Wrapper>
        </ResizeObserver>
      </div>
    </React.StrictMode>
  );
}
