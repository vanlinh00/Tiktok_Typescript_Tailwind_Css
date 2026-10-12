import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';

export interface FollowingAccountData {
    id?: number | string;
    file_url?: string;
    user: {
        nickname: string;
        full_name: string;
        avatar: string;
        tick?: boolean;
    };
    [key: string]: any;
}

export interface FollowingAccountItemProps {
    data: FollowingAccountData;
}

function FollowingAccountItem({ data }: FollowingAccountItemProps) {
    return (
        <div className="bg-white rounded-lg border border-[rgba(22,24,35,0.12)] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center w-full">
                <Image className="w-16 h-16 rounded-full object-cover border-2 border-[#fe2c55] mb-3 shadow-xs" src={data.user.avatar} alt={data.user.nickname} />
                <h3 className="text-base font-bold text-[#161823] truncate max-w-full leading-snug">{data.user.full_name}</h3>
                <p className="text-sm text-[rgba(22,24,35,0.75)] flex items-center justify-center gap-1 mt-0.5 truncate max-w-full">
                    <span>{data.user.nickname}</span>
                    {data.user.tick && <FontAwesomeIcon className="text-[#20d5ec] text-xs shrink-0" icon={faCheckCircle} />}
                </p>
                <Button primary className="!mt-4 !w-full !py-2 !text-sm">
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default FollowingAccountItem;
