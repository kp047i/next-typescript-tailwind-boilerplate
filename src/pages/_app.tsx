/* eslint-disable react/jsx-props-no-spreading */
import '../styles/index.css';
import React from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
