import React from 'react';
import { render, screen } from '@testing-library/react';

import { StoreContext } from '../../index';
import TodosStore from '../../store';
import Input from '../Input';
import TodoToolBar from './';

describe('TodoToolBar', () => {
  it('Should render with text', () => {
    render(
      <StoreContext.Provider value={{
        store: new TodosStore()
      }}>
        <TodoToolBar />
      </StoreContext.Provider>
    );
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });
  it('Should render with button named All with the border property equals 1px solid darkred', () => {
    render(<Input />);
    const button = screen.getByRole('button', /All/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ border: '1px solid darkred' });
  });
  it('Should render with button named Active', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Active/i)).toBeInTheDocument();
  });
  it('Should render with button named Completed', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Completed/i)).toBeInTheDocument();
  });
  it('Should render with button named Clear completed', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Clear completed/i)).toBeInTheDocument();
  });
});