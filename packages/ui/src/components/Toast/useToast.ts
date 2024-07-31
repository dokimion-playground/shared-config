import { useContext } from 'react';
import { ToastDispatchContext, ToastOptionType, ToastStateContext } from './toastProvider';
import { ToastProps } from './toast';
import { guid } from '../../utils/guid';

const MAX_TOAST_COUNT = 5;
const DURATION = 3000;

export const useToast = () => {
  const dispatchContext = useContext(ToastDispatchContext);
  const toasts = useContext(ToastStateContext);

  if (!dispatchContext) {
    throw new Error('ToastProvider 내부에서 사용하세요.');
  }

  const { open, close } = dispatchContext;

  const openToast = (message: string, option: ToastOptionType) => {
    const { type = 'success', duration = DURATION, isClose = true, onDone } = option;
    if (toasts && toasts.length === MAX_TOAST_COUNT) return;
    const id = guid();
    const toast: ToastProps = {
      id,
      message,
      type,
      duration,
      isClose,
      onDone,
    };
    open(toast);
  };

  const success = (message: string, option?: Omit<ToastOptionType, 'type'>) =>
    openToast(message, { type: 'success', ...option });

  const error = (message: string, option?: Omit<ToastOptionType, 'type'>) =>
    openToast(message, { type: 'error', ...option });

  const warning = (message: string, option?: Omit<ToastOptionType, 'type'>) =>
    openToast(message, { type: 'warning', ...option });

  return { success, error, warning };
};
