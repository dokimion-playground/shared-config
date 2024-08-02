import React from 'react';
import { Chip, Option } from './';
import * as S from './style';

interface ChipListProps {
  options: Option[];
  onDelete?: (option: Option) => void;
}

export const ChipList = ({ options, onDelete }: ChipListProps) => {
  const handleDelete = (option: Option, e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(option);
  };

  return (
    <S.ChipListWrapper>
      {options.map((option) => (
        <Chip key={option.code} option={option} onDelete={handleDelete} />
      ))}
    </S.ChipListWrapper>
  );
};
