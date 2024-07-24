import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@repo/ui';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle />,
};
