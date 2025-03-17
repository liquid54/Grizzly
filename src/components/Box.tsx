import React, { type ReactNode } from 'react';

export type boxEnum = 'row' | 'row-center' | 'column';

interface BoxProps {
    className?: string;
    type?: boxEnum;
    children: ReactNode;
}

const Box = ({ type = 'row-center', className, children }: BoxProps) => {
    return (
        <div
            className={`flex
      ${type === 'column' && 'flex-col'}
      ${type === 'row-center' && 'items-center'}
      ${type === 'row' && 'flex-row'}
      ${className}
    `}
        >
            {children}
        </div>
    );
};

export default Box;
