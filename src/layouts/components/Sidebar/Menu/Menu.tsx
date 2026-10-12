import React, { ReactNode } from 'react';

export interface SidebarMenuProps {
    children: ReactNode;
}

function Menu({ children }: SidebarMenuProps) {
    return <nav className="flex flex-col gap-0.5">{children}</nav>;
}

export default Menu;
