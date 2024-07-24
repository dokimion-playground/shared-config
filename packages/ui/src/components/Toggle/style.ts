import styled from 'styled-components';

export const ToggleContainer = styled.div<{ $isOn: boolean }>`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isOn }) => ($isOn ? 'green' : 'red')};
  color: white;
  cursor: pointer;
  user-select: none;
`;
