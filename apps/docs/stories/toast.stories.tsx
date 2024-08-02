import React from 'react';
import { Button, ToastProvider, useToast } from '@repo/ui';
import styled from 'styled-components';

export default {
  title: 'common/Toast',
  tags: ['autodocs'],
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

  const handleDone = () => {
    console.log('success');
  };

  return (
    <Wrapper>
      <Button size="sm" onClick={() => Toast.success('성공했습니다.', { onDone: handleDone })}>
        Create Success Toast
      </Button>
      <Button size="sm" onClick={() => Toast.error('실패했습니다.')}>
        Create Error Toast
      </Button>
      <Button size="sm" onClick={() => Toast.warning('경고')}>
        Create Warning Toast
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
