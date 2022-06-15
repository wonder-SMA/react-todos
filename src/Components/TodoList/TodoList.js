import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';

import { StoreContext } from '../../index';
import TodoListItem from '../TodoListItem';

const StyledTodoList = styled.ul`
  ${props => props?.isClosed && css`
    ul {
      display: none;
    }
  `}
`;

const TodoList = observer(({ isClosed }) => {
  const { store } = useContext(StoreContext);

  return (
    <StyledTodoList isActive={true} isClosed={isClosed}>
      <ul>
        {store.todos.map((todo) =>
          <TodoListItem key={todo} todo={todo} />
        )}
      </ul>
    </StyledTodoList>
  );
});

export default TodoList;
