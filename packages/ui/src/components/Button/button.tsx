import type { FontStyleKeys } from '../../styles/common.style';
import * as S from './style';

export type ButtonVariants = 'primary' | 'second';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonColor = 'black' | 'white';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  variant?: ButtonVariants;
  font?: FontStyleKeys;
  size?: ButtonSizes;
  color?: ButtonColor;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  color = 'black',
  disabled = false,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      type={type}
      $variant={variant}
      $size={size}
      color={color}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
