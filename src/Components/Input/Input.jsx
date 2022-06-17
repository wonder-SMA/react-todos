import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../ui';

const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 52px;
    width: 75%;
    font-size: 24px;
    padding: 0 10px;
    margin: 10px;
    border-radius: 12px;
    outline: none;
    color: #545454;
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.2);

    ::placeholder {
      color: #d3d3d3;
    }
  }

  button {
    border: 1px solid darkred;
  }
`;

const Input = ({ addTodoHandler }) => {
  const [searchValue, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onClick = () => {
    addTodoHandler(searchValue);
    setSearch('');
  };

  return (
    <StyledInput>
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        placeholder="Введите задачу"
      />
      <Button onClick={onClick}>Add todo</Button>
    </StyledInput>
  );
};

export default Input;
