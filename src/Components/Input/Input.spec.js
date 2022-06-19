import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './';

describe('Input', () => {
  it('Should contain placeholder by default', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Введите задачу');
  });
  it('Should render with controlled input element, which works correctly', async () => {
    render(<Input />);
    await userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
  });
  it('Should render with button named Add todo', () => {
    render(<Input />);
    expect(screen.getByRole('button', { name: /Add todo/ })).toBeInTheDocument();
  });
  it('Should render with addTodoHandler callback, which works correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <Input
        addTodoHandler={todo => {
          mockCallback(todo);
        }} />
    );
    await userEvent.type(screen.getByRole('textbox'), 'React');
    await userEvent.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls[0][0]).toBe('React');
  });
  it('Should be cleared after clicking the button', async () => {
    const mockCallback = jest.fn();
    render(
      <Input
        addTodoHandler={todo => {
          mockCallback(todo);
        }} />
    );
    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, 'React');
    await userEvent.click(screen.getByRole('button'));
    expect(textbox).toHaveDisplayValue('');
  });
});
