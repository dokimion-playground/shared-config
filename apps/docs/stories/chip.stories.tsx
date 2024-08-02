import type { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipList, Option } from '@repo/ui';
import { useState } from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Common/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default = () => {
  const option = { name: 'Chip 1', code: '1' };
  return <Chip option={option} />;
};

export const Secondary = (args: Story) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    { name: 'Chip 1', code: '1' },
    { name: 'Chip 2', code: '2' },
    { name: 'Chip 3', code: '3' },
    { name: 'Chip 4', code: '4' },
  ]);

  console.log(selectedOptions);

  const handleDelete = (option: Option) => {
    setSelectedOptions((prev) => prev.filter((item) => item.code !== option.code));
  };

  return <ChipList options={selectedOptions} onDelete={handleDelete} />;
};
