import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { StoreContext } from '../../index';
import Input from '../Input';
import Header from '../Header';
import TodoHeader from '../TodoHeader';
import TodoList from '../TodoList';
import TodoToolBar from '../TodoToolBar';

const AppWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 28px;
  background-color: #f5f5f5;

  svg {
    cursor: pointer;
  }

  *:not(:first-child, :last-child) {
    p {
      margin-left: 18px;
      font-size: 30px;
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 740px) {
    width: 740px;
    margin: 0 auto;
  }
`;

function App() {
  const { store } = useContext(StoreContext);
  const [isClosed, setIsClosed] = useState(false);

  const addTodoHandler = (todo) => {
    if (todo) {
      store.setAllTodos(todo);
      store.setFilterValue('All');
    }
  };

  const closeListHandler = () => {
    setIsClosed(!isClosed);
  };

  return (
    <AppWrapper>
      <Header />
      <Input addTodoHandler={addTodoHandler} />
      <TodoHeader isClosed={isClosed} closeListHandler={closeListHandler} />
      <TodoList isClosed={isClosed} />
      <TodoToolBar />
    </AppWrapper>
  );
}

export default App;