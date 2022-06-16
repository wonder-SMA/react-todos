import { css } from 'styled-components';

export const overflowX = () => css`
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const Item = () => css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 1px;
  background-color: white;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);

  p {
    color: #545454;
  }
`;

export const Layer = ({ width, bottom, left }) => css`
  position: absolute;
  width: ${width};
  height: 6px;
  bottom: ${bottom};
  left: ${left};
  content: '';
  background-color: white;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
`;