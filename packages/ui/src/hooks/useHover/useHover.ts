import React, { useCallback, useState } from 'react';

export type UseHoverResult<T> = [React.MouseEventHandler<T>, React.MouseEventHandler<T>, boolean];

export const useHover = <T extends HTMLElement = HTMLElement>(): UseHoverResult<T> => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return [onMouseEnter, onMouseLeave, isHovering];
};
