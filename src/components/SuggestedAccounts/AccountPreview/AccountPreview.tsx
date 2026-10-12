import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

function AccountPreview() {
    return (
        <div className="w-80 p-5">
            <div className="flex items-center justify-between">
                <img
                    className="w-11 h-11 rounded-full object-cover"
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660665600&x-signature=hToDdYbvevi4S9Fn5tdnI%2Bk0%2BkM%3D"
                    alt=""
                />
                <Button className="!px-4 !py-1.5" primary>
                    Follow
                </Button>
            </div>
            <div className="mt-3 text-[#161823]">
                <p className="text-lg font-bold flex items-center leading-tight">
                    <span>quocnguyenphu</span>
                    <FontAwesomeIcon className="text-sm text-[#20d5ec] ml-1" icon={faCheckCircle} />
                </p>
                <p className="text-sm font-medium text-[rgba(22,24,35,0.75)] mt-0.5">Quốc Nguyễn Phú</p>
                <p className="mt-2.5 text-base flex items-center gap-3">
                    <span>
                        <strong className="font-bold text-[#161823]">8.2M </strong>
                        <span className="text-[rgba(22,24,35,0.75)] text-sm">Followers</span>
                    </span>
                    <span>
                        <strong className="font-bold text-[#161823]">8.2M </strong>
                        <span className="text-[rgba(22,24,35,0.75)] text-sm">Likes</span>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
