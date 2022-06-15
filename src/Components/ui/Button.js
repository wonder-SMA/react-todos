import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: 0 4px;
  border-radius: 4px;
  border: 1px solid white;
  color: #545454;
  background-color: white;
  cursor: pointer;

  ${props => props?.isActive === props.children && css`
    border: 1px solid darkred;
  `}

  ${props => props?.isActive === 'active' && css`
    &:active {
      border: 1px solid darkred;
    }
  `};
  
  @media (min-width: 576px) {
    padding: 8px;
  }
`;

const Button = ({ children, onClick, isActive }) => {
  return (
    <StyledButton onClick={onClick} isActive={isActive}>
      {children}
    </StyledButton>
  );
};

export default Button;
