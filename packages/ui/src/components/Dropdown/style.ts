import styled, { css } from 'styled-components';
import { FONT_STYLES, ScrollBar } from '../../styles/common.style';

export const Wrapper = styled.div`
  width: 100%;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 0;

  & label {
    ${FONT_STYLES.BODY5_M}
  }

  & div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.alarm};
    margin-left: 2px;
  }
`;

const disabledStyles = css`
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray400};
  cursor: not-allowed;
`;

const hoverStyles = css`
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const openStyles = css`
  border: 2px solid ${({ theme }) => theme.color.black};
`;

const DropdownStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  ${FONT_STYLES.BODY5_M};
  color: ${({ theme }) => theme.color.gray500};
  cursor: pointer;
  box-sizing: border-box;
`;

export const DropdownWrapper = styled.section`
  width: 260px;
  position: relative;
`;

export const Dropdown = styled.div<{ disabled: boolean; $isOpen: boolean; $isSelected: boolean }>`
  ${DropdownStyles}
  ${({ disabled }) => disabled && disabledStyles}
  ${({ $isOpen }) => $isOpen && openStyles}

  &:hover {
    ${({ $isOpen }) => !$isOpen && hoverStyles}
  }

  & span {
    color: ${({ $isSelected, theme }) => ($isSelected ? theme.color.black : 'gray500')};
  }
`;

export const DropdownList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  border: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  box-sizing: border-box;
  ${FONT_STYLES.BODY5_R};
  ${ScrollBar}
`;

export const DropdownItem = styled.li<{ $isSelected?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.color.lineB_B_01};
  display: flex;
  align-items: center;
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
