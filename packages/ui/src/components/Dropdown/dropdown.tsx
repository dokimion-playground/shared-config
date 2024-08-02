import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { CheckSVG, DropDownArrowSVG } from '../Icon';
import { useDisclosure, useOutsideClick } from '../../hooks';
import { Text } from '../Text';
import { ChipList } from '../Chip';

interface Option {
  code: string;
  name: string;
  ordinal?: number;
  active?: boolean;
}

export type DropdownMode = 'default' | 'multiSelect';

export interface DropdownProps {
  name?: string;
  width?: string;
  isDot?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string | string[]) => void;
  options: Option[];
  value: string | string[];
  style?: React.CSSProperties;
  mode?: DropdownMode;
}

export const Dropdown = ({
  name,
  placeholder = '선택해주세요.',
  isDot = true,
  disabled = false,
  options,
  onChange,
  style,
  value,
  mode = 'default',
}: DropdownProps) => {
  const { isOpen, onClose, toggle } = useDisclosure();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    setSelectedOptions(
      Array.isArray(value) ? options.filter((option) => value.includes(option.code)) : [],
    );
  }, [value, options]);

  const handleOptionClick = (code: string) => {
    if (mode === 'multiSelect') {
      const newValue = Array.isArray(value) ? [...value] : [];
      const index = newValue.indexOf(code);
      if (index === -1) {
        newValue.push(code);
        setSelectedOptions((prev) => [...prev, options.find((option) => option.code === code)!]);
      } else {
        newValue.splice(index, 1);
        setSelectedOptions((prev) => prev.filter((item) => item.code !== code));
      }
      onChange?.(newValue);
    } else {
      onChange?.(code);
      onClose();
    }
  };

  const handleDelete = (option: Option) => {
    const newValue = Array.isArray(value) ? value.filter((item) => item !== option.code) : '';
    setSelectedOptions((prev) => prev.filter((item) => item.code !== option.code));
    onChange?.(newValue);
  };

  const displayLabel =
    mode === 'multiSelect' ? (
      selectedOptions.length > 0 ? (
        <ChipList options={selectedOptions} onDelete={handleDelete} />
      ) : (
        placeholder
      )
    ) : (
      <Text variant="BODY5_M" color="white">
        {options.find((option) => option.code === value)?.name || placeholder}
      </Text>
    );

  useOutsideClick(containerRef, () => {
    onClose();
  });

  return (
    <S.Wrapper>
      {name && (
        <S.Label htmlFor={name}>
          {name}
          {isDot && <span></span>}
        </S.Label>
      )}

      <S.HiddenSelect
        name={name}
        value={Array.isArray(value) ? '' : value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        multiple={mode === 'multiSelect'}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </S.HiddenSelect>

      <S.DropdownWrapper ref={containerRef} style={style}>
        <S.Dropdown
          onClick={toggle}
          disabled={disabled}
          $isOpen={isOpen}
          $isSelected={mode === 'multiSelect' ? selectedOptions.length > 0 : !!value}
        >
          {displayLabel}
          <S.IconContainer>
            <DropDownArrowSVG rotate={isOpen ? 180 : undefined} />
          </S.IconContainer>
        </S.Dropdown>
        {isOpen && !disabled && (
          <S.DropdownList>
            {options.map((option) => (
              <S.DropdownItem
                key={option.code}
                onClick={() => handleOptionClick(option.code)}
                $isSelected={
                  Array.isArray(value) ? value.includes(option.code) : value === option.code
                }
              >
                <Text variant="BODY5_R">{option.name}</Text>
                {mode === 'multiSelect' && Array.isArray(value) && value.includes(option.code) && (
                  <CheckSVG />
                )}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownWrapper>
    </S.Wrapper>
  );
};
