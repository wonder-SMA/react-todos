import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { StoreContext } from '../../index';
import TodosStore from '../../store';
import TodoListItem from './';

describe('TodoListItem', () => {
  it('Should render with mdiCheckboxBlankCircleOutline Icon', () => {
    const { container } = render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoListItem
          todo={'Buy groceries'}
        />
      </StoreContext.Provider>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
    <li
      class="sc-eCYdqJ dwCUzh"
    >
      <svg
        role="presentation"
        style="width: 2.25rem; height: 2.25rem;"
        viewBox="0 0 24 24"
      >
        <path
          d="${mdiCheckboxBlankCircleOutline}"
          style="fill: #cadeda;"
        />
      </svg>
      <p>
        Buy groceries
      </p>
    </li>
    `);
  });
  it('Should render with text', () => {
    render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoListItem
          todo={'Buy groceries'}
        />
      </StoreContext.Provider>
    );
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });
  it('Should render with text without the text-decoration property equals line-through', () => {
    render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoListItem
          todo={'Buy groceries'}
        />
      </StoreContext.Provider>
    );
    expect(screen.getByText('Buy groceries')).not.toHaveStyle({ textDecoration: 'line-through' });
  });
  it('Should render with mdiCheckboxMarkedCircleOutline Icon, which appears after clicking', () => {
    render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoListItem
          todo={'Buy groceries'}
        />
      </StoreContext.Provider>
    );
    const presentation = screen.getByRole('presentation');
    userEvent.click(presentation);
    expect(presentation).toMatchInlineSnapshot(`
    <svg
      role="presentation"
      style="width: 2.25rem; height: 2.25rem;"
      viewBox="0 0 24 24"
    >
      <path
        d="${mdiCheckboxMarkedCircleOutline}"
        style="fill: #cadeda;"
      />
    </svg>
    `);
  });
  it('Should render with text with the text-decoration property equals line-through, which appears after clicking', () => {
    render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoListItem
          todo={'Buy groceries'}
        />
      </StoreContext.Provider>
    );
    const presentation = screen.getByRole('presentation');
    userEvent.click(presentation);
    expect(screen.getByText('Buy groceries')).toHaveStyle({ textDecoration: 'line-through' });
  });
});
