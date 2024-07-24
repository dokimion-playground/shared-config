import React, { useState } from 'react';
import * as S from './style';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <S.ToggleContainer $isOn={isOn} onClick={handleToggle}>
      {isOn ? 'ON' : 'OFF'}
    </S.ToggleContainer>
  );
};

export default Toggle;
