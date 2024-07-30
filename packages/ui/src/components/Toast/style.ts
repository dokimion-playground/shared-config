import styled, { css } from 'styled-components';
import { ToastType } from './toast';

const ToastTypeStyles = {
  default: () => css``,
  success: () => css``,
  error: () => css``,
  waring: () => css``,
};

export const ToastWrapper = styled.div<{ type: ToastType }>`
  width: 400px;
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  margin: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray900};
  box-shadow: ${({ theme }) => theme.shadowStyles.shadow3};
`;
