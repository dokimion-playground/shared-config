import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import DropDownArrowSVG from '../Icon/DropDownArrowSVG';
import { useDisclosure, useOutsideClick } from '../../hooks';

interface Option {
  code: string;
  name: string;
  ordinal?: number;
  active?: boolean;
}

export interface DropdownProps {
  name?: string;
  width?: string;
  isError?: boolean;
  isDot?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  options: Option[];
  value?: string;
  defaultValue?: string;
  style?: React.CSSProperties;
}

const Dropdown = ({
  name,
  placeholder = '선택해주세요.',
  isDot = true,
  disabled = false,
  options,
  onChange,
  style,
  value: externalValue,
  defaultValue,
}: DropdownProps) => {
  const { isOpen, onClose, toggle } = useDisclosure();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = useState(defaultValue || '');

  const isControlled = externalValue !== undefined;

  const handleOptionClick = (code: string) => {
    if (!isControlled) {
      setInternalValue(code);
    }
    onChange?.(code);
    onClose();
  };

  const displayLabel = isControlled
    ? options.find((option) => option.code === externalValue)?.name || placeholder
    : options.find((option) => option.code === internalValue)?.name || placeholder;

  useEffect(() => {
    if (isControlled) {
      setInternalValue(externalValue || '');
    }
  }, [externalValue, isControlled]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

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
        value={isControlled ? externalValue : internalValue}
        onChange={handleSelectChange}
        disabled={disabled}
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
          $isSelected={!!externalValue || !!internalValue}
        >
          <span>{displayLabel}</span>
          <DropDownArrowSVG rotate={isOpen ? 180 : undefined} />
        </S.Dropdown>
        {isOpen && !disabled && (
          <S.DropdownList>
            {options.map((option) => (
              <S.DropdownItem
                key={option.code}
                onClick={() => handleOptionClick(option.code)}
                $isSelected={internalValue === option.code}
              >
                {option.name}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownWrapper>
    </S.Wrapper>
  );
};

export default Dropdown;
