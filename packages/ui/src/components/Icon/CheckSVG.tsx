import React, { SVGProps } from 'react';

export const CheckSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17L4 12"
        strokeWidth="2"
        strokeLinecap="square"
        stroke={props.color || '#000'}
      />
    </svg>
  );
};
