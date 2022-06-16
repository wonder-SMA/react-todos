import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';

import { StoreContext } from '../../index';
import TodoListItem from '../TodoListItem';

const StyledTodoList = styled.ul`
  max-height: calc(100vh - 340px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  ${props => props?.isClosed && css`
    ul {
      display: none;
    }
  `};

  @media (min-width: 576px) {
    max-height: calc(100vh - 364px);
  }
`;

const TodoList = observer(({ isClosed }) => {
  const { store } = useContext(StoreContext);

  return (
    <StyledTodoList isActive={true} isClosed={isClosed}>
      {store.todos.map((todo) =>
        <TodoListItem key={todo} todo={todo} />
      )}
    </StyledTodoList>
  );
});

export default TodoList;
