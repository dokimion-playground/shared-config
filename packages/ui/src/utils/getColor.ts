import { ToastType } from '../components/Toast';

export const getToastTypeColor = (type: ToastType): string => {
  switch (type) {
    case 'success':
      return '#518355';
    case 'error':
      return '#BF0711';
    case 'warning':
      return '#FFCC33';
    default:
      return '#fff';
  }
};
