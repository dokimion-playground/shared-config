import React from 'react';
import { Toast, ToastProps, ToastType } from './toast';

export interface ToastAreaProps {
  toasts: ToastProps[];
  removeToast(id: string): void;
}

export type ToastOptionType = {
  type: ToastType;
  duration: number;
};

export const ToastList = ({ toasts, removeToast }: ToastAreaProps) => {
  return (
    <div>
      {toasts.map((toast) => {
        const { id, message, type, duration } = toast;
        return (
          <Toast
            id={id}
            message={message}
            type={type}
            duration={duration}
            key={id}
            onDone={() => removeToast(id)}
          />
        );
      })}
    </div>
  );
};
