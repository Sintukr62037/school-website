import React from 'react'
import { LoaderProvider, useLoading, BallTriangle } from '@agney/react-loading';

const App = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

export default App;