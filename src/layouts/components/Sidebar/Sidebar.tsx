import React from 'react';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';

function Sidebar() {
    return (
        <aside className="w-[280px] md:w-[356px] py-5 px-3 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto shrink-0 border-r border-[rgba(22,24,35,0.06)] bg-white select-none">
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon className="w-8 h-8" />} activeIcon={<HomeActiveIcon className="w-8 h-8 text-[#fe2c55]" />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon className="w-8 h-8" />}
                    activeIcon={<UserGroupActiveIcon className="w-8 h-8 text-[#fe2c55]" />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon className="w-8 h-8" />} activeIcon={<LiveActiveIcon className="w-8 h-8 text-[#fe2c55]" />} />
                <MenuItem title="Watch" to={config.routes.watch} icon={<LiveIcon className="w-8 h-8" />} activeIcon={<LiveActiveIcon className="w-8 h-8 text-[#fe2c55]" />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
