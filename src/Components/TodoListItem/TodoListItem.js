import React, { useState, useContext, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled, { css } from 'styled-components';
import Icon from '@mdi/react';
import { mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';

import { StoreContext } from '../../index';
import { Item, overflowX } from '../../styles/Mixins';

const StyledTodoListItem = styled.li`
  height: 78px;

  ${overflowX()}
  ${Item()}

  ${props => props?.isMarked && css`
    p {
      text-decoration: line-through;
      color: #bdbebd;
    }
  `}
`;

const TodoListItem = observer(({ todo }) => {
  const { store } = useContext(StoreContext);
  const [isMarked, setIsMarked] = useState(false);

  useLayoutEffect(() => {
    setIsMarked(store.completedTodos.includes(todo));
  }, []);

  const setCheckboxHandler = () => {
    store.setCompletedTodos(todo);
    setIsMarked(!isMarked);
  };

  return (
    <StyledTodoListItem isMarked={isMarked}>
      <Icon
        path={isMarked ? mdiCheckboxMarkedCircleOutline : mdiCheckboxBlankCircleOutline}
        size={window.matchMedia('(min-width: 576px)').matches ? 2 : 1.5}
        color="#cadeda"
        onClick={setCheckboxHandler}
      />
      <p>{todo}</p>
    </StyledTodoListItem>
  );
});

export default TodoListItem;
