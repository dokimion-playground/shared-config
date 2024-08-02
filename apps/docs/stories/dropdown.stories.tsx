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
  title: 'Common/Dropdown',
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
    mode: 'multiSelect',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  render: (args) => {
    const mode = args.mode || 'default';

    const [value, setValue] = useState<string | string[]>(mode === 'multiSelect' ? [] : '');

    const onChange = (newValue: string | string[]) => {
      setValue(newValue);
    };

    return <Dropdown {...args} value={value} onChange={onChange} />;
  },
};
