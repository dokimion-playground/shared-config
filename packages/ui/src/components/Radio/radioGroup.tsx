import React, { PropsWithChildren } from 'react';
import { RadioProvider, RadioContextType } from './radioProvider';

interface RadioGroupProps extends RadioContextType {
  label?: string;
}

export const RadioGroup = ({ label, children, ...props }: PropsWithChildren<RadioGroupProps>) => {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <RadioProvider {...props}>{children}</RadioProvider>
    </fieldset>
  );
};
