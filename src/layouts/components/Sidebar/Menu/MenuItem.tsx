import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface SidebarMenuItemProps {
    title: string;
    to: string;
    icon: ReactNode;
    activeIcon: ReactNode;
}

function MenuItem({ title, to, icon, activeIcon }: SidebarMenuItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center p-2.5 rounded-lg text-lg font-bold transition-colors no-underline group ${
                    isActive
                        ? 'text-[#fe2c55]'
                        : 'text-[#161823] hover:bg-[rgba(22,24,35,0.03)]'
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <span className="flex items-center justify-center w-8 h-8 shrink-0">
                        {isActive ? activeIcon : icon}
                    </span>
                    <span className="ml-3 text-lg font-bold truncate">{title}</span>
                </>
            )}
        </NavLink>
    );
}

export default MenuItem;
