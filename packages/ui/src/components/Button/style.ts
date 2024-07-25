import styled, { CSSProp, css } from 'styled-components';
import { ButtonSizes, ButtonVariants } from './button';
import { addToPx, FONT_STYLES } from '../../styles/common.style';

interface ButtonStyleProps {
  $width: string | number;
  $size: ButtonSizes;
  $variant?: ButtonVariants;
  disabled?: boolean;
  Styles?: CSSProp;
}

export const buttonSize = {
  sm: () => css`
    padding: 8px 14px;
    ${FONT_STYLES.BODY3_S}
  `,
  md: () => css`
    padding: 10px 16px;
    ${FONT_STYLES.BODY1_S2}
  `,
  lg: () => css`
    padding: 14px 20px;
    ${FONT_STYLES.H7_S}
  `,
};

const disabledButtonStyles = css<ButtonStyleProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color['gray100']};
  color: ${({ theme }) => theme.color['gray500']};
`;

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ $size }) => buttonSize[$size]};
  width: ${({ $width }) => addToPx($width)};
  ${({ disabled }) => disabled && disabledButtonStyles};
  border: ${({ theme, $variant }) =>
    $variant === 'primary' ? `2px solid ${theme.color['black']}` : 'none'};
`;
