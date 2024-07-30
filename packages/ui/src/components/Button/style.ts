import styled, { CSSProp, css } from 'styled-components';
import { ButtonSizes, ButtonVariants } from './button';
import { addToPx, FONT_STYLES } from '../../styles/common.style';

interface ButtonStyleProps {
  $width: string | number;
  $size: ButtonSizes;
  $variant: ButtonVariants;
  disabled: boolean;
  Styles?: CSSProp;
}

const buttonSizeStyles = {
  sm: () => css`
    ${FONT_STYLES.BODY6_M}
    padding: 8px 16px;
  `,
  md: () => css`
    ${FONT_STYLES.BODY3_M2}
    padding: 14px 16px;
  `,
  lg: () => css`
    ${FONT_STYLES.H7_S}
    padding: 20px 16px;
  `,
};

const buttonVariantStyles = {
  primary: () => css`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  `,
  secondary: () => css`
    background-color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.black};
  `,
  sub: () => css`
    background-color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.gray400};
    &:hover {
      border: 2px solid ${({ theme }) => theme.color.black};
    }
  `,
  gray: () => css`
    background-color: ${({ theme }) => theme.color.gray300};
    &:active {
      background-color: ${({ theme }) => theme.color.gray400};
    }
  `,
  text: () => css`
    background-color: inherit;
    border: none;
  `,
};

const disabledStyles = ($size: ButtonStyleProps['$size']) => css`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color.gray300};
  color: ${({ theme }) => theme.color.gray500};

  ${$size === 'lg' &&
  css`
    background-color: ${({ theme }) => theme.color.gray400};
  `};
`;

export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: ${({ $width }) => addToPx($width)};
  ${({ $size }) => buttonSizeStyles[$size]};
  ${({ $variant }) => buttonVariantStyles[$variant]};
  ${({ $size, disabled }) => disabled && disabledStyles($size)};
`;
