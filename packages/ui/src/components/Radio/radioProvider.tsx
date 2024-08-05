import React, { createContext, PropsWithChildren, useContext } from 'react';

// RadioContextType 업데이트
export interface RadioContextType {
  value?: string;
  onChange?: (newValue: string) => void;
  disabled?: boolean;
}

// 기본값으로 context 생성
export const RadioContext = createContext<RadioContextType>({});

export const RadioProvider = ({ children, ...props }: PropsWithChildren<RadioContextType>) => {
  return <RadioContext.Provider value={props}>{children}</RadioContext.Provider>;
};

// RadioContext를 사용하는 커스텀 훅
export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('useRadioContext must be used within a RadioProvider');
  }
  return context;
};
