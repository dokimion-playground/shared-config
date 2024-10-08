import { useHover } from '../useHover';
import { useTimeout } from '../useTimeout';

export interface UseCloseOnTimeoutProps {
  onClose: VoidFunction;
  timeout?: number;
}

export interface UseCloseOnTimeoutResult {
  onMouseOver: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
}

/**
 * Invokes callback after given amount of time unless mouse is on the element
 *
 * @param onClose
 * @param timeout
 *
 * @return mouse event handlers
 */
export function useCloseOnTimeout<T extends HTMLElement = HTMLElement>({
  onClose,
  timeout,
}: UseCloseOnTimeoutProps) {
  const [onMouseOver, onMouseLeave, isHovering] = useHover<T>();

  useTimeout(onClose, isHovering ? null : timeout);

  return { onMouseOver, onMouseLeave };
}
