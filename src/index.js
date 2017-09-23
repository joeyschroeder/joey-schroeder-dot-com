import { h, render } from 'preact';

import App from './components/app';

let root;
const init = () => root = render(<App />, document.getElementById('app'), root);

if (module.hot) module.hot.accept('./components/app', () => requestAnimationFrame(init));

init();
