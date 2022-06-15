import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { StoreContext } from '../../index';

import { Item, Layer } from '../../styles/Mixins';
import Button from '../ui';

const StyledTodoToolBar = styled.div`
  height: 54px;
  position: relative;
  display: flex;
  justify-content: space-between;

  ${Item()}
  p {
    margin: 0 4px;
    font-size: 18px;
  }

  &:before {
    ${Layer({ width: '99%', bottom: '-6px', left: '.5%' })}
  }

  &:after {
    ${Layer({ width: '98%', bottom: '-12px', left: '1%' })}
  }
`;

const TodoToolBar = observer(() => {
  const { store } = useContext(StoreContext);

  const onClick = (e) => {
    store.setFilterValue(e.target.textContent);
  };

  return (
    <StyledTodoToolBar>
      <p>{store.activeTodos.length} items left</p>
      <div>
        <Button onClick={onClick} isActive={store.filterValue}>All</Button>
        <Button onClick={onClick} isActive={store.filterValue}>Active</Button>
        <Button onClick={onClick} isActive={store.filterValue}>Completed</Button>
      </div>
      <Button onClick={() => store.clearCompletedTodos()} isActive="active">Clear completed</Button>
    </StyledTodoToolBar>
  );
});

export default TodoToolBar;
