import styled, { CSSProp, css } from 'styled-components';
import { ButtonColor, ButtonSizes, ButtonVariants } from './button';
import { FONT_STYLES, FontStyleKeys } from '../../styles/common.style';

interface ButtonStyleProps {
  $size: ButtonSizes;
  $variant?: ButtonVariants;
  disabled?: boolean;
  color: ButtonColor;
  Styles?: CSSProp;
}

export const buttonSize = {
  sm: () => css`
    padding: '14px';
    ${FONT_STYLES.BODY6_M}
  `,
  md: () => css`
    padding: '16px';
    ${FONT_STYLES.BODY3_S}
  `,
  lg: () => css`
    padding: '16px';
    ${FONT_STYLES.H7_S}
  `,
};

const buttonVariantStyles = {
  secondary: (color) => css`
    background-color: ${({ theme }) =>
      color === 'white' ? theme.color['gray100'] : theme.color['black']};
    color: ${({ theme }) => (color === 'white' ? theme.color['black'] : theme.color['white'])};
  `,
  primary: (color) => css`
    border: 2px solid ${({ theme }) => theme.color['black']};
    background-color: ${({ theme }) => theme.color['white']};
  `,
};

const disabledButtonStyles = css<ButtonStyleProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color['gray100']};
  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          color: ${({ theme }) => theme.color['gray500']};
          border: 2px solid ${({ theme }) => theme.color['gray500']};
        `
      : css`
          color: ${({ theme }) => theme.color['gray500']};
        `};
`;

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ $size }) => buttonSize[$size!]};
  ${({ disabled }) => disabled && disabledButtonStyles}
`;
