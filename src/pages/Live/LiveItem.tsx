import React from 'react';
import Image from '~/components/Image';

export interface LiveItemData {
    id: number | string;
    user: string;
    desc: string;
    viewers: string;
    avatar: string;
    thumb: string;
}

export interface LiveItemProps {
    data: LiveItemData;
}

function LiveItem({ data }: LiveItemProps) {
    return (
        <div className="cursor-pointer group">
            <div className="relative w-full aspect-[3/4] bg-neutral-900 rounded-xl overflow-hidden shadow-sm">
                <Image className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={data.thumb} alt={data.user} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 p-3 flex flex-col justify-between">
                    <span className="self-start bg-[#fe2c55] text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                        LIVE
                    </span>
                    <span className="text-white text-xs font-semibold drop-shadow-sm">{data.viewers} viewers</span>
                </div>
            </div>

            <div className="flex items-center mt-3 gap-2.5">
                <Image className="w-10 h-10 rounded-full object-cover border border-neutral-200 shrink-0" src={data.avatar} alt={data.user} />
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-[#161823] truncate leading-tight">{data.user}</h4>
                    <p className="text-xs text-[rgba(22,24,35,0.7)] truncate mt-1 leading-tight">{data.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default LiveItem;
