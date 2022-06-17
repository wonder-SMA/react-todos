import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 104px;

  h1 {
    font-family: 'Archivo', sans-serif;
    font-size: 128px;
    font-weight: 100;
    line-height: 0.8;
    text-align: center;
    color: #eadcdc;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>todos</h1>
    </StyledHeader>
  );
};

export default Header;
