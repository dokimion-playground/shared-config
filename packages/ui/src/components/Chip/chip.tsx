import React from 'react';
import * as S from './style';
import { CloseSVG, ToastCloseSVG } from '../Icon';
import { Text } from '../Text';

export interface Option {
  name: string;
  code: string;
}

export interface ChipProps {
  option: Option;
  onDelete?: (option: Option, e: React.MouseEvent) => void;
}

export const Chip = ({ option, onDelete }: ChipProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(option, e);
  };

  return (
    <S.ChipWrapper>
      <Text variant="CAPTION1_S" color="black">
        {option.name}
      </Text>
      <S.IconContainer onClick={handleDelete}>
        <CloseSVG width={12} height={12} color="black" />
      </S.IconContainer>
    </S.ChipWrapper>
  );
};
