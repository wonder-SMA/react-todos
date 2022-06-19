import React from 'react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoHeader from './';

describe('TodoHeader', () => {
  it('Should render with mdiChevronDown Icon', () => {
    const mockCallback = jest.fn();
    render(
      <TodoHeader
        isClosed={false}
        closeListHandler={mockCallback}
      />
    );
    expect(screen.getByRole('presentation')).toMatchInlineSnapshot(`
    <svg
      role="presentation"
      style="width: 2.25rem; height: 2.25rem;"
      viewBox="0 0 24 24"
    >
      <path
        d="${mdiChevronDown}"
        style="fill: #545454;"
      />
    </svg>
    `);
  });
  it('Should render with closeListHandler callback, which works correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <TodoHeader
        isClosed={false}
        closeListHandler={mockCallback}
      />
    );
    await userEvent.click(screen.getByRole('presentation'));
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('Should render with mdiChevronRight Icon, which appears if isClosed equals true', async () => {
    const mockCallback = jest.fn();
    render(
      <TodoHeader
        isClosed={true}
        closeListHandler={mockCallback}
      />
    );
    const presentation = screen.getByRole('presentation');
    await userEvent.click(presentation);
    expect(presentation).toMatchInlineSnapshot(`
    <svg
      role="presentation"
      style="width: 2.25rem; height: 2.25rem;"
      viewBox="0 0 24 24"
    >
      <path
        d="${mdiChevronRight}"
        style="fill: #545454;"
      />
    </svg>
    `);
  });
});
