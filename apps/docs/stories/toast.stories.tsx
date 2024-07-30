import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@repo/ui';

const meta: Meta<typeof Toast> = {
  title: 'Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    id: '1',
    type: 'success',
    message: '성공했습니다.',
  },
  render: (args) => <Toast {...args} />,
};
