import React, { useRef, useState } from 'react';
import * as S from './style';

interface ToggleProps {
  defaultChecked?: boolean;
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
}

const Toggle = ({ defaultChecked = false, isOn, onToggle }: ToggleProps) => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (isOn !== undefined) {
      onToggle && onToggle(checked);
    } else {
      setInternalChecked(checked);
      if (toggleRef.current) {
        toggleRef.current.checked = checked;
      }
    }
  };

  const checkedValue = isOn !== undefined ? isOn : internalChecked;

  return (
    <S.Label>
      <S.HiddenInput
        ref={toggleRef}
        type="checkbox"
        checked={checkedValue}
        defaultChecked={defaultChecked}
        onChange={handleToggle}
      />
      <S.Slider />
    </S.Label>
  );
};

export default Toggle;
