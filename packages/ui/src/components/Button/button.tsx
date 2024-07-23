import type { FontStyleKeys } from "../../styles/common.style";
import * as S from "./style";

export type ButtonVariants = "outlined" | "filled";
export type ButtonSizes = "sm" | "md" | "lg";
export type ButtonColor = "black" | "white";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
  width?: string;
  height?: string;
  font?: FontStyleKeys;
  size?: ButtonSizes;
  color?: ButtonColor;
  variant?: ButtonVariants;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button = ({
  type = "button",
  width = "fit-content",
  height = "64px",
  font = "H7_S",
  size = "md",
  variant = "filled",
  color = "black",
  disabled = false,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      style={style}
      type={type}
      $width={width}
      $height={height}
      $size={size}
      $variant={variant}
      $font={font}
      color={color}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
