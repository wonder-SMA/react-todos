import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './';

describe('Input', () => {
  it('Should contain placeholder by default', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Введите задачу');
  });
  it('Should render with controlled input element, which works correctly', () => {
    render(<Input />);
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
  });
  it('Should render with button, which name equals Add todo', () => {
    render(<Input />);
    expect(screen.getByRole('button', /Add todo/i)).toBeInTheDocument();
  });
  it('Should render with addTodoHandler callback, which works correctly', () => {
    const mockCallback = jest.fn();
    render(
      <Input
        addTodoHandler={todo => {
          mockCallback(todo);
        }} />
    );
    userEvent.type(screen.getByRole('textbox'), 'React');
    userEvent.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls[0][0]).toBe('React');
  });
  it('Should be cleared after clicking the button', () => {
    const mockCallback = jest.fn();
    render(
      <Input
        addTodoHandler={todo => {
          mockCallback(todo);
        }} />
    );
    const textbox = screen.getByRole('textbox');
    userEvent.type(textbox, 'React');
    userEvent.click(screen.getByRole('button'));
    expect(textbox).toHaveDisplayValue('');
  });
});
