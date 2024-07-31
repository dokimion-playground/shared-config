import React, { SVGProps } from 'react';

export const ToastWarningSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
      <mask id="mask0_281_635" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="26">
        <rect width="26" height="26" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_281_635)">
        <path
          d="M2.73445 21C1.96412 21 1.48306 20.1656 1.86902 19.499L11.1346 3.49482C11.5197 2.82954 12.4803 2.82954 12.8654 3.49483L22.131 19.499C22.5169 20.1656 22.0359 21 21.2656 21H2.73445ZM4.45 19H19.55L12 6L4.45 19ZM12 18C12.2833 18 12.5208 17.9042 12.7125 17.7125C12.9042 17.5208 13 17.2833 13 17C13 16.7167 12.9042 16.4792 12.7125 16.2875C12.5208 16.0958 12.2833 16 12 16C11.7167 16 11.4792 16.0958 11.2875 16.2875C11.0958 16.4792 11 16.7167 11 17C11 17.2833 11.0958 17.5208 11.2875 17.7125C11.4792 17.9042 11.7167 18 12 18ZM11 15H13V10H11V15Z"
          fill={props.color || '#d9c620ed'}
        />
      </g>
    </svg>
  );
};
