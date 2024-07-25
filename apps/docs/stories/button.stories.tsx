import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: '버튼',
      },
      description: '버튼 내용',
    },
    variant: {
      control: { type: 'radio' },
      description: 'Button variant (primary or secondary)',
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      description: '버튼 사이즈',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'radio' },
      description: '버튼 타입',

      options: ['button', 'submit'],
      defaultValue: 'button', // Set a default value
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      defaultValue: false, // Set a default value
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>버튼</Button>,
};
