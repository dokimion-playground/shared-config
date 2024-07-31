import React, { useContext } from 'react';
import { Toast } from './toast';
import { Portal } from '../Portal';
import { ToastStateContext } from './toastProvider';
import * as S from './style';

export const ToastList = () => {
  const toasts = useContext(ToastStateContext);

  return (
    <Portal>
      <S.ToastListContainer>
        {toasts.map((toast) => {
          const { id, message, type, duration, onDone, isClose } = toast;
          return (
            <Toast
              id={id}
              message={message}
              type={type}
              duration={duration}
              key={id}
              onDone={onDone}
              isClose={isClose}
            />
          );
        })}
      </S.ToastListContainer>
    </Portal>
  );
};
