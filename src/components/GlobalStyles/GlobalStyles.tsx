import React, { ReactNode } from 'react';
import '~/index.css';

export interface GlobalStylesProps {
    children: ReactNode;
}

function GlobalStyles({ children }: GlobalStylesProps) {
    return <>{children}</>;
}

export default GlobalStyles;
