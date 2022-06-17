import React from 'react';
import { render } from '@testing-library/react';

import { StoreContext } from '../../index';
import TodosStore from '../../store';
import App from './';

describe('App', () => {
  it('App snapshot didn\'t change', () => {
    const component = render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <App />
      </StoreContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
