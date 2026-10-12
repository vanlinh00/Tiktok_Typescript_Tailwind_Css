import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem, { MenuItemData } from './MenuItem';
import Header from './Header';

const defaultFn = () => {};

export interface MenuHistoryItem {
    title?: string;
    data: MenuItemData[];
}

export interface MenuProps {
    children: React.ReactElement;
    items?: MenuItemData[];
    hideOnClick?: boolean;
    onChange?: (item: MenuItemData) => void;
}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }: MenuProps) {
    const [history, setHistory] = useState<MenuHistoryItem[]>([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent && item.children) {
                            setHistory((prev) => [...prev, item.children!]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs: Record<string, any>) => (
        <div className="w-56" tabIndex={-1} {...attrs}>
            <PopperWrapper className="!pb-2">
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className="overflow-y-auto max-h-[420px]">{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
