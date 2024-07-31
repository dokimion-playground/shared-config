import React, { SVGProps } from 'react';

export const CloseSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...props}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        strokeWidth="2"
        strokeLinecap="square"
        stroke={props.color || '#000'}
      />
    </svg>
  );
};
