import { App } from './components/app';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

const init = () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );

if (module.hot) module.hot.accept();

init();
