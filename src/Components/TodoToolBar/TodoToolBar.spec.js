import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithMobx } from '../helpers/renderWithMobx';

import TodoToolBar from './';

describe('TodoToolBar', () => {
  it('Should render with text', () => {
    renderWithMobx(<TodoToolBar />);
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });
  it('Should render with button named All with the border property equals 1px solid darkred', () => {
    renderWithMobx(<TodoToolBar />);
    screen.debug();
    const button = screen.getByRole('button', { name: /All/ });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ border: '1px solid darkred' });
  });
  it('Should render with button named Active', () => {
    renderWithMobx(<TodoToolBar />);
    expect(screen.getByRole('button', { name: /Active/ })).toBeInTheDocument();
  });
  it('Should render with button named Completed', () => {
    renderWithMobx(<TodoToolBar />);
    expect(screen.getByRole('button', { name: /Completed/ })).toBeInTheDocument();
  });
  it('Should render with button named Clear completed', () => {
    renderWithMobx(<TodoToolBar />);
    expect(screen.getByRole('button', { name: /Clear completed/ })).toBeInTheDocument();
  });
});