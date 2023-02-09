import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';

const root = createRoot(document.getElementById('app'));
const init = (Component) => root.render(<Component />);

init(App);
