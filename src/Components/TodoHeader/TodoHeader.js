import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';

import { Item } from '../../styles/Mixins';

const StyledTodoHeader = styled.div`
  height: 78px;

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
        size={2}
        color="#545454"
        onClick={closeListHandler}
      />
      <p>What needs to be done?</p>
    </StyledTodoHeader>
  );
};

export default TodoHeader;
