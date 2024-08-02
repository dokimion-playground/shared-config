import styled, { css } from 'styled-components';

export const ChipWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray300};
  padding: 6px 8px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChipListWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
`;
