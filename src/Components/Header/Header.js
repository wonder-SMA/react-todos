import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 104px;

  p {
    font-family: 'Archivo', sans-serif;
    font-size: 128px;
    line-height: 0.8;
    text-align: center;
    color: #eadcdc;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>todos</p>
    </StyledHeader>
  );
};

export default Header;
