import type { FontStyleKeys } from '../../styles/common.style';
import * as S from './style';

export type ButtonVariants = 'primary' | 'secondary' | 'sub' | 'gray' | 'text';
export type ButtonSizes = 'sm' | 'md' | 'lg';
// export type ButtonColor = 'black' | 'white';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit';
  variant?: ButtonVariants;
  size?: ButtonSizes;
  width?: number | string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  width = 'auto',
  size = 'md',
  disabled = false,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      $variant={variant}
      $width={width}
      $size={size}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </S.Button>
  );
};
