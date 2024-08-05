import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '@repo/ui';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Common/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('kr');

    return (
      <div>
        <RadioGroup label="국가선택" value={value} onChange={setValue}>
          <Radio value="KR">대한민국</Radio>
          <Radio value="JP">일본</Radio>
          <Radio value="TW">대만</Radio>
        </RadioGroup>
        <RadioGroup label="국가선택">
          <Radio name="country" value="AU" defaultChecked>
            호주
          </Radio>
          <Radio name="country" value="US">
            미국
          </Radio>
          <Radio name="country" value="VN">
            베트남
          </Radio>
        </RadioGroup>
      </div>
    );
  },
};
