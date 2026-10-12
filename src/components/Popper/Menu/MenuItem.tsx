import React, { ReactNode } from 'react';
import Button from '~/components/Button';

export interface MenuItemData {
    icon?: ReactNode;
    title: string;
    to?: string;
    separate?: boolean;
    children?: {
        title?: string;
        data: MenuItemData[];
    };
    [key: string]: any;
}

export interface MenuItemProps {
    data: MenuItemData;
    onClick?: () => void;
}

function MenuItem({ data, onClick }: MenuItemProps) {
    const itemClasses = `!w-full !justify-start !rounded-none !px-4 !py-2.5 !text-sm !font-semibold !m-0 !bg-transparent hover:!bg-[rgba(22,24,35,0.03)] text-[#161823] ${
        data.separate ? 'border-t !border-[rgba(22,24,35,0.12)]' : '!border-transparent'
    }`;

    return (
        <Button className={itemClasses} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
