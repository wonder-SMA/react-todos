import React from 'react';
import { render } from '@testing-library/react';

import { StoreContext } from '../../index';
import TodosStore from '../../store';
import TodoList from './';

describe('TodoList', () => {
  it('Should be displayed if isClosed equals false', async () => {
    const { container } = render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoList
          isClosed={false}
        />
      </StoreContext.Provider>
    );
    expect(container.firstChild).toHaveStyle({ display: 'flex' });
  });
  it('Should be hidden if isClosed equals true', async () => {
    const { container } = render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoList
          isClosed={true}
        />
      </StoreContext.Provider>
    );
    expect(container.firstChild).toHaveStyle({ display: 'none' });
  });
});
