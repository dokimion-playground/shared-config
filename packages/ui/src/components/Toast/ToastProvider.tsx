import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { guid } from '../../utils/guid';
import { ToastList } from './ToastList';

export type ToastType = 'success' | 'error' | 'warning' | 'default';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  close?: boolean;
}

export type ToastOptionType = {
  type: ToastType;
  duration?: number;
  close?: boolean;
};

interface ToastContextType {
  show: (message: string, option?: ToastOptionType) => void;
  success: (message: string, option?: Omit<ToastOptionType, 'type'>) => void;
  error: (message: string, option?: Omit<ToastOptionType, 'type'>) => void;
  warning: (message: string, option?: Omit<ToastOptionType, 'type'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const root = document.createElement('div');
    root.id = 'root-modal';
    document.body.appendChild(root);

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  const showToast = (
    message: string,
    option: ToastOptionType = { type: 'default', duration: 4500, close: false },
  ) => {
    const id = guid();
    const newToast = {
      id,
      message,
      type: option.type,
      duration: option.duration,
      close: option.close,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (option.duration) {
      setTimeout(() => removeToast(id), option.duration);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue: ToastContextType = {
    show: showToast,
    success: (message, option = { duration: 4500, close: false }) =>
      showToast(message, { type: 'success', ...option }),
    error: (message, option = { duration: 4500, close: false }) =>
      showToast(message, { type: 'error', ...option }),
    warning: (message, option = { duration: 4500, close: false }) =>
      showToast(message, { type: 'warning', ...option }),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <ToastList toasts={toasts} removeToast={removeToast} />,
        document.getElementById('root-modal')!,
      )}
    </ToastContext.Provider>
  );
};
