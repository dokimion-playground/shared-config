import React from 'react';
import * as S from './style';
import { FontStyleKeys } from '../../styles/common.style';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  width?: string;
  isError?: boolean;
  isDot?: boolean;
  rightContent?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  height?: string;
  type?: 'text' | 'password';
  style?: React.CSSProperties;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name = '제목',
      width = 'auto',
      placeholder = '내용 입력',
      isError = false,
      isDot = true,
      type = 'text',
      rightContent,
      disabled = false,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <S.Wrapper style={style}>
        {name && (
          <S.Label htmlFor={name}>
            {name}
            {isDot && <span></span>}
          </S.Label>
        )}
        <S.InputWrapper>
          <S.Input
            $isError={isError}
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
          <S.RightContentContainer>{rightContent}</S.RightContentContainer>
        </S.InputWrapper>
        {children && <S.TextContainer>{children}</S.TextContainer>}
      </S.Wrapper>
    );
  },
);

Input.displayName = 'Input';

export default Input;
