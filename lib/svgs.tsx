import React, { FC, PropsWithChildren, SVGProps } from 'react';

export interface SvgProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Checkmark = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            fill="hsl(243, 100%, 62%)"
            fillRule="evenodd"
            d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15Zm16.787 5.075a1 1 0 0 0-.003-1.414l-.709-.705a1 1 0 0 0-1.414.003l-5.772 5.796L7.57 9.98a1 1 0 0 0-1.415.01l-.702.712a1 1 0 0 0 .01 1.414L10.2 16.79a1 1 0 0 0 1.411-.007l7.176-7.207Z"
            clipRule="evenodd"
        />
    </svg>
);
