import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

export interface AccountItemData {
    avatar: string;
    full_name: string;
    nickname: string;
    tick?: boolean;
    [key: string]: any;
}

export interface AccountItemProps {
    data: AccountItemData;
}

function AccountItem({ data }: AccountItemProps) {
    return (
        <Link
            to={`/@${data.nickname}`}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-[rgba(22,24,35,0.03)] transition-colors no-underline text-[#161823]"
        >
            <Image
                className="w-10 h-10 rounded-full object-cover shrink-0"
                src={data.avatar}
                alt={data.full_name}
            />
            <div className="flex-1 ml-3 min-w-0">
                <h4 className="text-base font-semibold text-[#161823] flex items-center leading-5 truncate">
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className="ml-1.5 text-[#20d5ec] text-xs shrink-0" icon={faCheckCircle} />}
                </h4>
                <span className="text-sm text-[rgba(22,24,35,0.5)] block truncate leading-tight mt-0.5">
                    {data.nickname}
                </span>
            </div>
        </Link>
    );
}

export default AccountItem;
