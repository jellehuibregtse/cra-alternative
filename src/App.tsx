import React, { useState } from 'react';

interface AppProps {
  initialCount?: number;
}

export function App({ initialCount = 0 }: AppProps): JSX.Element {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
