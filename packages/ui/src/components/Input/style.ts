import {
  DisabledStyles,
  FONT_STYLES,
  ErrorStyles,
  HoverStyles,
  ActiveStyles,
} from '../../styles/common.style';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Label = styled.label`
  display: inline-flex;
  padding: 4px 0;
  ${FONT_STYLES.BODY5_M};

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.alarm};
    margin-left: 2px;
  }
`;

export const InputWrapper = styled.div<{ $address?: boolean }>`
  width: 260px;
  position: relative;
`;

export const RightContentContainer = styled.div`
  ${FONT_STYLES.CAPTION1_R}
`;

export const Input = styled.input<{
  disabled: boolean;
  $isError: boolean;
}>`
  ${FONT_STYLES.BODY5_M};
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray500};
  }

  &:hover {
    ${({ disabled }) => !disabled && HoverStyles}
  }

  &:focus {
    ${ActiveStyles}
  }

  ${({ $isError }) => $isError && ErrorStyles}
  ${({ disabled }) => disabled && DisabledStyles}
`;

export const TextContainer = styled.div`
  ${FONT_STYLES.BODY6_M}
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px;
`;
