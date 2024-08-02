import styled, { css } from 'styled-components';
import {
  FONT_STYLES,
  ScrollBar,
  DisabledBorderStyles,
  HoverBorderStyles,
  ActiveBorderStyles,
  TextEllipsis,
} from '../../styles/common.style';

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Label = styled.label`
  display: inline-flex;
  padding: 4px 0;
  ${FONT_STYLES.BODY5_M}

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.alarm};
    margin-left: 2px;
  }
`;

const DropdownStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.color.white};
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  ${FONT_STYLES.BODY5_M};
  color: ${({ theme }) => theme.color.gray500};
  cursor: pointer;
`;

export const DropdownWrapper = styled.section`
  width: 340px;
  position: relative;
`;

export const IconContainer = styled.div`
  min-height: 20px;
  min-width: 20px;
`;

export const Dropdown = styled.div<{
  disabled: boolean;
  $isOpen: boolean;
  $isSelected: boolean;
}>`
  ${DropdownStyles}
  ${({ disabled }) => disabled && DisabledBorderStyles}
  ${({ $isOpen }) => $isOpen && ActiveBorderStyles}

  &:hover {
    ${({ $isOpen, disabled }) => !disabled && !$isOpen && HoverBorderStyles}
  }

  & span {
    color: ${({ $isSelected, theme }) => ($isSelected ? theme.color.black : theme.color.gray500)};
    ${TextEllipsis}
  }
`;

export const DropdownList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: calc(100% + 4px);
  left: 0px;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  border: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-sizing: border-box;
  ${ScrollBar}
`;

export const DropdownItem = styled.li<{ $isSelected?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray450};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: none;
    overflow: hidden;
    border-radius: 0 0 8px 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray200};
    background-clip: padding-box;
  }
`;

export const HiddenSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
`;
