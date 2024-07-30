import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FONT_STYLES, Text, theme } from '@repo/ui';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'a', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(FONT_STYLES),
    },
    color: {
      control: { type: 'select' },
      options: Object.keys(theme.color),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    as: 'span',
    variant: 'H1_B',
    color: 'black',
    children: '텍스트 스타일',
  },
  render: (args) => <Text {...args} />,
};
