import { HoverBorderStyles } from '../../styles/common.style';
import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  width: auto;
  gap: 4px;
  align-items: center;
`;

export const HiddenInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
`;

export const IconContainer = styled.div<{ checked?: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: ${({ checked, theme }) => (checked ? 'none' : `1px solid ${theme.color.gray400}`)};
  border-radius: 4px;
  background-color: ${({ checked, theme }) => (checked ? theme.color.black : 'white')};

  &:hover {
    ${HoverBorderStyles}
  }

  svg {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;
