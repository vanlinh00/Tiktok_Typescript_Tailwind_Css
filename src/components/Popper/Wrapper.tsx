import React, { ReactNode } from 'react';

export interface WrapperProps {
    children: ReactNode;
    className?: string;
}

function Wrapper({ children, className = '' }: WrapperProps) {
    return (
        <div
            className={`flex flex-col w-full max-h-[min((100vh-156px),734px)] min-h-[100px] pt-2 rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] ${className}`}
        >
            {children}
        </div>
    );
}

export default Wrapper;
