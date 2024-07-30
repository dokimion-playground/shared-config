import React from 'react';
import * as S from './style';
import { FONT_STYLES } from '../../styles/common.style';
import { ColorKeys } from '../../styles/theme';

export interface TextProps<C extends React.ElementType = 'span'> {
  as?: C;
  variant?: keyof typeof FONT_STYLES;
  color?: ColorKeys;
}

type TextRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type TextPropsWithTypedAttrs<T extends React.ElementType> = TextProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

const Text = React.forwardRef(function Text<C extends React.ElementType = 'span'>(
  {
    as,
    children,
    variant = 'BODY3_B2',
    color = 'black',
    style,
    ...props
  }: TextPropsWithTypedAttrs<C>,
  ref?: TextRef<C>,
) {
  const tag: React.ElementType = as || 'span';

  return (
    <S.Text as={tag} ref={ref} style={style} color={color} variant={variant} {...props}>
      {children}
    </S.Text>
  );
});

Text.displayName = 'Text';

export default Text;
