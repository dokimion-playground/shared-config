import { ForwardedRef, forwardRef } from 'react';
import * as S from './style';
import { Text } from '../Text';
import { CheckSVG } from '../Icon';

export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  checked?: boolean;
}

export const Checkbox = forwardRef(
  (
    { checked, children, ...props }: React.PropsWithRef<CheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <S.Label>
        <S.HiddenInput ref={ref} type="checkbox" checked={checked} {...props} />
        <S.IconContainer checked={checked}>
          <CheckSVG color="white" />
        </S.IconContainer>
        {children && <Text variant="BODY5_M">{children}</Text>}
      </S.Label>
    );
  },
);
