import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@repo/ui';

const options = [
  { code: 'KR', name: '대한민국' },
  { code: 'US', name: 'USA' },
  { code: 'JP', name: '日本' },
  { code: 'TW', name: '臺灣' },
  { code: 'AU', name: 'Australia' },
  { code: 'TH', name: 'ประเทศไทย' },
  { code: 'VN', name: 'Việt Nam' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    name: '사업장국가',
    options,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  render: (args) => <Dropdown {...args} />,
};

export const Secondary: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    const onChange = (newValue: string) => {
      setValue(newValue);
    };

    return <Dropdown {...args} {...{ value, onChange }} />;
  },
};
