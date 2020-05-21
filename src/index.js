import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app';

const init = (Component) =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

init(App);

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./components/app/app').App;
    init(nextApp);
  });
}
