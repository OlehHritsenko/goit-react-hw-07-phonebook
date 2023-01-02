import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;
`;

const Name = styled.span`
  color: #082228;
  margin-right: auto;
`;

const Phone = styled.span`
  padding: 0;
`;

export { Item, Name, Phone };