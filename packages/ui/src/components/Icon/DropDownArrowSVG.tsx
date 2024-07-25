import React, { SVGProps } from 'react';

const DropDownArrowSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg
    "
    >
      <g transform={props.rotate ? `rotate(${props.rotate} 10 10)` : ''}>
        <path
          id="Vector 1"
          d="M5 8.41667L10 13L15 8.41667"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={props.color || '#000'}
        />
      </g>
    </svg>
  );
};

export default DropDownArrowSVG;
