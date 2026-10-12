import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu, { MenuItemData } from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const MENU_ITEMS: MenuItemData[] = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem: MenuItemData) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu: MenuItemData[] = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/login',
            separate: true,
        },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 flex justify-center w-full h-[60px] bg-white border-b border-[rgba(22,24,35,0.12)] shadow-[0_1px_1px_rgba(0,0,0,0.06)]">
            <div className="h-full w-full max-w-[1150px] px-4 md:px-6 flex items-center justify-between">
                <Link to={config.routes.home} className="flex items-center shrink-0">
                    <img className="h-[38px] w-auto" src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className="flex items-center gap-1 sm:gap-2">
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button
                                    type="button"
                                    className="relative flex items-center justify-center p-2 text-xl text-[#161823] bg-transparent hover:opacity-75 transition-opacity cursor-pointer border-0"
                                >
                                    <UploadIcon className="w-6 h-6" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button
                                    type="button"
                                    className="relative flex items-center justify-center p-2 text-xl text-[#161823] bg-transparent hover:opacity-75 transition-opacity cursor-pointer border-0"
                                >
                                    <MessageIcon className="w-6 h-6" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <Link
                                    to={config.routes.chat}
                                    className="relative flex items-center justify-center p-2 text-xl text-[#161823] bg-transparent hover:opacity-75 transition-opacity cursor-pointer no-underline"
                                >
                                    <InboxIcon className="w-6 h-6" />
                                    <span className="absolute top-0.5 right-0.5 px-1.5 h-4 min-w-4 rounded-full text-[10px] font-bold text-white bg-[#fe2c55] flex items-center justify-center leading-none">
                                        12
                                    </span>
                                </Link>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className="ml-2 cursor-pointer">
                                <Image
                                    className="w-8 h-8 object-cover rounded-full ring-1 ring-neutral-200"
                                    src="https://files.f8.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                    alt="User avatar"
                                />
                            </div>
                        ) : (
                            <button
                                type="button"
                                className="text-xl ml-3 p-1.5 text-[#161823] bg-transparent hover:opacity-75 cursor-pointer border-0"
                            >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
