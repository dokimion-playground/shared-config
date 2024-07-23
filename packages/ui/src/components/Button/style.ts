import styled, { CSSProp, css } from "styled-components";
import { ButtonColor, ButtonSizes, ButtonVariants } from "./button";
import { FONT_STYLES, FontStyleKeys } from "../../styles/common.style";

interface ButtonStyleProps {
  $width: string;
  $height: string;
  $size?: ButtonSizes;
  $variant?: ButtonVariants;
  $font: FontStyleKeys;
  disabled?: boolean;
  color: ButtonColor;
  Styles?: CSSProp;
}

export const buttonPaddingSize = {
  xs: "10px 16px",
  sm: "14px 16px",
  md: "20px 16px",
  lg: "20px 24px",
} as const;

const buttonVariantStyles = {
  filled: (color) => css`
    background-color: ${({ theme }) =>
      color === "white" ? theme.color["gray100"] : theme.color["black"]};
    color: ${({ theme }) =>
      color === "white" ? theme.color["black"] : theme.color["white"]};
  `,
  outlined: (color) => css`
    border: 2px solid ${({ theme }) => theme.color["black"]};
    background-color: ${({ theme }) => theme.color["white"]};
  `,
};

const disabledButtonStyles = css<ButtonStyleProps>`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color["gray100"]};
  ${({ $variant }) =>
    $variant === "outlined"
      ? css`
          color: ${({ theme }) => theme.color["gray500"]};
          border: 2px solid ${({ theme }) => theme.color["gray500"]};
        `
      : css`
          color: ${({ theme }) => theme.color["gray500"]};
        `};
`;

export const ButtonContainer = styled.button<ButtonStyleProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  ${({ $font }) => FONT_STYLES[$font]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: ${({ $size }) => buttonPaddingSize[$size ?? "sm"]};
  ${({ $variant, color }) => buttonVariantStyles[$variant ?? "filled"](color)};
  ${({ disabled }) => disabled && disabledButtonStyles}
`;
