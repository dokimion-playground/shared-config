import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@repo/ui';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    width: { control: 'text' },
    isError: { control: 'boolean' },
    isDot: { control: 'boolean' },
    rightContent: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    height: { control: 'text' },
    type: { control: { type: 'inline-radio', options: ['text', 'password'] } },
    style: { control: 'object' },
    children: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => <Input {...args} />,
};
