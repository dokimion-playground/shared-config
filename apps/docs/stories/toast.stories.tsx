import React, { useEffect } from 'react';
import { ToastProvider, useToast } from '@repo/ui';

export default {
  title: 'common/Toast',
  decorators: [
    (Story: any) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export const Default = () => {
  const Toast = useToast();

  useEffect(() => {
    Toast.success('마운트 시 알림');
  }, [Toast]);

  return (
    <div>
      <div>
        <h2>No Close</h2>
        <button onClick={() => Toast.success('성공')}>success</button>
        <button onClick={() => Toast.error('실패')}>error</button>
        <button onClick={() => Toast.warning('경고')}>warning</button>
      </div>
      <div>
        <h2>With Close</h2>
        <button onClick={() => Toast.success('성공', { close: true })}>success</button>
        <button onClick={() => Toast.error('실패', { close: true })}>error</button>
        <button onClick={() => Toast.warning('경고', { close: true })}>warning</button>
      </div>
    </div>
  );
};
