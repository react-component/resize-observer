import '../assets/index.less';
import React from 'react';
import ResizeObserver from '../src';

function randomSize() {
  return {
    width: Math.round(50 + Math.random() * 150),
    height: Math.round(50 + Math.random() * 150),
  };
}

const sharedStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

export default function App() {
  const [size1, setSize1] = React.useState(randomSize());
  const [size2, setSize2] = React.useState(randomSize());

  console.log('Render:', size1, size2);

  return (
    <ResizeObserver.Collection
      onBatchResize={infoList => {
        console.log(
          'Batch Resize:',
          infoList,
          infoList.map(({ data, size }) => `${data}(${size.width}/${size.height})`),
        );
      }}
    >
      <div style={{ display: 'flex', columnGap: 4, marginBottom: 8 }}>
        <button onClick={() => setSize1(randomSize())}>Resize: 1</button>
        <button onClick={() => setSize2(randomSize())}>Resize: 2</button>
        <button
          onClick={() => {
            setSize1(randomSize());
            setSize2(randomSize());
          }}
        >
          Resize: all
        </button>
      </div>
      <div style={{ display: 'flex', columnGap: 16 }}>
        <ResizeObserver data="shape_1">
          <div style={{ ...sharedStyle, ...size1, background: 'red' }}>1</div>
        </ResizeObserver>
        <ResizeObserver data="shape_2">
          <div style={{ ...sharedStyle, ...size2, background: 'blue' }}>2</div>
        </ResizeObserver>
      </div>
    </ResizeObserver.Collection>
  );
}
