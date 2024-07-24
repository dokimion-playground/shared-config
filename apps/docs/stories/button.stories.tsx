import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props}>버튼</Button>,
};
