import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';

import { Item, overflowX } from '../../styles/Mixins';

const StyledTodoHeader = styled.div`
  height: 78px;

  ${overflowX()}
  ${Item()}
  
  p {
    font-style: italic;
    color: #bdbebd;
  }
`;

const TodoHeader = ({ isClosed, closeListHandler }) => {
  return (
    <StyledTodoHeader>
      <Icon
        path={isClosed ? mdiChevronRight : mdiChevronDown}
        size={window.matchMedia('(min-width: 576px)').matches ? 2 : 1.5}
        color="#545454"
        onClick={closeListHandler}
      />
      <p>What needs to be done?</p>
    </StyledTodoHeader>
  );
};

export default TodoHeader;
