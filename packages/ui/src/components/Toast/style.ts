import styled, { keyframes } from 'styled-components';
import { ToastType } from './toast';
import { getToastTypeColor } from '../../utils/getColor';

export const fadeIn = keyframes({
  '0%': {
    WebkitTransform: 'translateY(20px)',
    transform: 'translateY(20px)',
    opacity: 0,
  },
  '100%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    opacity: 1,
  },
});

const fadeOut = keyframes({
  '0%': {
    WebkitTransform: 'translateY(0)',
    transform: 'translateY(0)',
    opacity: 1,
  },
  '100%': {
    WebkitTransform: 'translateY(-20px)',
    transform: 'translateY(-20px)',
    opacity: 0,
  },
});

const progressAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

export const ToastWrapper = styled.div<{ $duration: number; $type: ToastType; $isShown: boolean }>`
  position: relative;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray900};
  box-shadow: ${({ theme }) => theme.shadowStyles.shadow3};
  animation: ${({ $isShown }) => ($isShown ? fadeIn : fadeOut)} 0.4s ease-out;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 4px 0 0 0;
    background-color: ${({ $type }) => getToastTypeColor($type)};
    animation: ${progressAnimation} ${({ $duration }) => $duration}ms linear;
  }
`;

export const ToastListContainer = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.toast};
  right: 8px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
