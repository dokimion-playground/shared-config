import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RangeDatePicker, RangeDatePickerProps, useDateRange } from '@repo/ui';

const meta: Meta<typeof RangeDatePicker> = {
  title: 'Common/RangeDatePicker',
  component: RangeDatePicker,
  tags: ['autodocs'],
  argTypes: {
    startDate: { control: 'date' },
    endDate: { control: 'date' },
  },
  parameters: {
    docs: {
      story: {
        height: '600px',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RangeDatePicker>;

export const Primary: Story = {
  render: () => {
    const { startDate, endDate, onChangeStart, onChangeEnd } = useDateRange();

    return (
      <RangeDatePicker
        startDate={startDate}
        endDate={endDate}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
      />
    );
  },
};
