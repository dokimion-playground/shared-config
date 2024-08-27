import { useContext } from 'react';
import { Text } from '../Text';
import * as S from './style';
import { RadioContext } from './radioProvider';

export interface RadioProps extends React.ComponentPropsWithRef<'input'> {
  name?: string;
  value?: string;
  disabled?: boolean;
}

export const Radio = ({
  name,
  defaultChecked = false,
  disabled = false,
  children,
  value,
  ...props
}: RadioProps) => {
  const group = useContext(RadioContext);

  console.log(value);

  return (
    <S.Label>
      <S.Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
        {...props}
      />
      {children && <Text variant="BODY5_R">{children}</Text>}
    </S.Label>
  );
};
