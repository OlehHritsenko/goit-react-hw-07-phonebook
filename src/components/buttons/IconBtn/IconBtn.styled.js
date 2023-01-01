import styled from 'styled-components';

const DeleteIconBtn = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    color: red;
  }
`;

export { DeleteIconBtn };