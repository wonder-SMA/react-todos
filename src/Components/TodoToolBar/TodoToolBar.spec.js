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
  it('Should render with button with the border property equals 1px solid darkred, which name equals All', () => {
    render(<Input />);
    const button = screen.getByRole('button', /All/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ border: '1px solid darkred' });
  });
  it('Should render with button, which name equals Active', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Active/i)).toBeInTheDocument();
  });
  it('Should render with button, which name equals Completed', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Completed/i)).toBeInTheDocument();
  });
  it('Should render with button, which name equals Clear completed', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Clear completed/i)).toBeInTheDocument();
  });
});