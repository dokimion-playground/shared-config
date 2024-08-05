import { HoverBorderStyles } from '../../styles/common.style';
import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  width: auto;
  gap: 4px;
  align-items: center;
`;

export const Input = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  position: relative;

  &:hover {
    ${HoverBorderStyles}
  }

  &:checked {
    border: 1px solid ${({ theme }) => theme.color.black};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.black};
  }
`;
