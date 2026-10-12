import React from 'react';

export interface ChatItemData {
    id: number | string;
    name: string;
    avatar: string;
    lastMessage: string;
    unread: number;
    [key: string]: any;
}

export interface ChatItemProps {
    data: ChatItemData;
    onClick?: () => void;
}

function ChatItem({ data, onClick }: ChatItemProps) {
    return (
        <div
            className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-[rgba(22,24,35,0.05)] transition-colors select-none"
            onClick={onClick}
        >
            <img className="w-11 h-11 rounded-full object-cover shrink-0 bg-neutral-200" src={data.avatar} alt={data.name} />
            <div className="flex-1 ml-3 min-w-0">
                <div className="font-semibold text-sm text-[#161823] truncate leading-tight">{data.name}</div>
                <div className="text-xs text-[rgba(22,24,35,0.6)] truncate mt-1 leading-tight">{data.lastMessage}</div>
            </div>
            {data.unread > 0 && (
                <span className="bg-[#fe2c55] text-white text-[11px] font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1.5 ml-2 shrink-0">
                    {data.unread}
                </span>
            )}
        </div>
    );
}

export default ChatItem;
