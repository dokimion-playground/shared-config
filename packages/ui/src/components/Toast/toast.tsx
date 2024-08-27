import React, { useContext, useState } from 'react';
import { CloseSVG, ToastCheckSVG, ToastCloseSVG, ToastWarningSVG } from '../Icon';
import { Text } from '../Text';
import { getToastTypeColor } from '../../utils/getColor';
import { useTimeout } from '../../hooks/useTimeout';
import * as S from './style';
import { ToastDispatchContext } from './toastProvider';

export type ToastType = 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onDone?: VoidFunction;
  isClose?: boolean;
}

export const Toast = ({
  id,
  message,
  type = 'success',
  duration = 3000,
  onDone,
  isClose = true,
}: ToastProps) => {
  const { close } = useContext(ToastDispatchContext);
  const [isShown, setIsShown] = useState(true);

  useTimeout(() => {
    if (isShown) {
      handleClose();
    }
  }, duration);

  const handleClose = () => {
    setIsShown(false);
    setTimeout(() => {
      close?.({ id, message, type, duration, onDone, isClose });
      onDone?.();
    }, 400); // fade out 애니메이션 지속 시간과 맞추기
  };
  return (
    <S.ToastWrapper $duration={duration} $type={type} $isShown={isShown}>
      <div>
        {type === 'success' && <ToastCheckSVG color={getToastTypeColor(type)} />}
        {type === 'error' && <ToastCloseSVG color={getToastTypeColor(type)} />}
        {type === 'warning' && <ToastWarningSVG color={getToastTypeColor(type)} />}
        <Text as="p" variant="BODY4_B" color="white">
          {message}
        </Text>
      </div>
      {isClose && (
        <div onClick={handleClose}>
          <CloseSVG color="#fff" />
        </div>
      )}
    </S.ToastWrapper>
  );
};
