import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { StoreContext } from '../../index';

import { Item, Layer } from '../../styles/Mixins';
import Button from '../ui';

const StyledTodoToolBar = styled.div`
  height: 78px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${Item()}
  p {
    width: 100%;
    text-align: center;
    margin: 0 4px;
    font-size: 16px;
  }

  div {
    display: flex;
  }

  &:before {
    ${Layer({ width: '99%', bottom: '-6px', left: '.5%' })}
  }

  &:after {
    ${Layer({ width: '98%', bottom: '-12px', left: '1%' })}
  }

  @media (min-width: 576px) {
    height: 54px;
    justify-content: space-between;

    div {
      width: 66%;
      display: flex;
    }

    p {
      width: auto;
      font-size: 18px;
    }

    button:last-child {
      margin-left: auto;
    }
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
        <Button onClick={() => store.clearCompletedTodos()} isActive="active">Clear completed</Button>
      </div>
    </StyledTodoToolBar>
  );
});

export default TodoToolBar;
