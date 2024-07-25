import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@repo/ui';

const meta: Meta<typeof Toggle> = {
  title: 'Design System/Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: () => <Toggle />,
};

export const Secondary: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);

    const onToggle = (value: boolean) => {
      setIsOn(value);
    };

    return <Toggle {...{ isOn, onToggle }} />;
  },
};
