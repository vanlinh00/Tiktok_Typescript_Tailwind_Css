import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

export interface SuggestedAccountItemData {
    avatar: string;
    full_name: string;
    nickname: string;
    tick?: boolean;
}

export interface AccountItemProps {
    data: SuggestedAccountItemData;
}

function AccountItem({ data }: AccountItemProps) {
    const renderPreview = (props: Record<string, any>) => {
        return (
            <div tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    const profileLink = `/@${data.nickname}`;

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <Link to={profileLink} className="block no-underline text-[#161823]">
                    <div className="flex items-center p-2 rounded hover:bg-[rgba(22,24,35,0.03)] cursor-pointer transition-colors">
                        <img className="w-8 h-8 rounded-full object-cover shrink-0" src={data.avatar} alt={data.full_name} />
                        <div className="flex-1 ml-3 min-w-0">
                            <p className="text-sm font-bold text-[#161823] flex items-center leading-none truncate">
                                <span>{data.nickname}</span>
                                {data.tick && <FontAwesomeIcon className="ml-1 text-xs text-[#20d5ec] shrink-0" icon={faCheckCircle} />}
                            </p>
                            <p className="text-xs text-[rgba(22,24,35,0.75)] truncate mt-1 leading-tight">{data.full_name}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
