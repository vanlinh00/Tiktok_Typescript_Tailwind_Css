import React from 'react';
import AccountItem, { SuggestedAccountItemData } from './AccountItem';

const suggestedAccounts: SuggestedAccountItemData[] = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D',
        full_name: 'Quốc Nguyễn Phú',
        nickname: 'quocnguyenphu',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D',
        full_name: 'Quốc Nguyễn Phú',
        nickname: 'quocnguyenphu',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D',
        full_name: 'Quốc Nguyễn Phú',
        nickname: 'quocnguyenphu',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D',
        full_name: 'Quốc Nguyễn Phú',
        nickname: 'quocnguyenphu',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D',
        full_name: 'Quốc Nguyễn Phú',
        nickname: 'quocnguyenphu',
        tick: true,
    },
];

export interface SuggestedAccountsProps {
    label: string;
}

function SuggestedAccounts({ label }: SuggestedAccountsProps) {
    return (
        <div className="border-t border-[#e3e3e4] pt-2 mt-2">
            <p className="px-2 py-1 text-xs font-semibold text-[rgba(22,24,35,0.75)]">{label}</p>

            {suggestedAccounts.map((account, index) => (
                <AccountItem key={index} data={account} />
            ))}

            <p className="px-2 py-1.5 text-xs font-bold text-[#fe2c55] cursor-pointer hover:underline inline-block">
                See all
            </p>
        </div>
    );
}

export default SuggestedAccounts;
