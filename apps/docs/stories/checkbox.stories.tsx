import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@repo/ui';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Common/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <>
        <Checkbox checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}>
          동의 하시겠습니까?
        </Checkbox>
      </>
    );
  },
};
