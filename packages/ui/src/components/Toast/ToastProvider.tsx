import React, { createContext, useState, useCallback, ReactNode, useMemo } from 'react';

import { ToastProps, ToastType } from './toast';
import { ToastList } from './toastList';

export type ToastOptionType = {
  type: ToastType;
  duration?: number;
  isClose?: boolean;
  onDone?: VoidFunction;
};

interface ToastDispatchContextType {
  open: (toast: ToastProps) => void;
  close: (toast: ToastProps) => void;
}

export const ToastStateContext = createContext<ToastProps[]>([]);
export const ToastDispatchContext = createContext<ToastDispatchContextType>({
  open: () => {},
  close: () => {},
});
type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = useCallback((toast: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, toast]);

    if (toast.duration) {
      setTimeout(() => {
        close(toast);
      }, toast.duration);
    }
  }, []);

  const close = useCallback((p_toast: ToastProps) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== p_toast.id));
    p_toast?.onDone?.();
  }, []);

  const toastState = useMemo(() => toasts, [toasts]);
  const toastAction = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ToastStateContext.Provider value={toastState}>
      <ToastDispatchContext.Provider value={toastAction}>
        {children}
        <ToastList />
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};
