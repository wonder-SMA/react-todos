import React from 'react';

import { renderWithMobx } from '../helpers/renderWithMobx';
import App from './';

describe('App', () => {
  test('App snapshot didn\'t change', () => {
    const component = renderWithMobx(<App />);
    expect(component).toMatchSnapshot();
  });
});
