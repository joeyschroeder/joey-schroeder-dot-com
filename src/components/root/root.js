import { App } from '../app/app';
import { Author } from '../author/author.component';
import React from 'react';
import { Title } from '../title/title.component';

export const Root = () => {
  return (
    <App>
      <Author />
      <Title />
    </App>
  );
};
