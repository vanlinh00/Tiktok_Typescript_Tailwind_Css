import React from 'react';
import ChatItem, { ChatItemData } from './ChatItem';

const conversations: ChatItemData[] = [
    {
        id: 1,
        name: 'Học vẹt',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        lastMessage: 'Bạn đã gửi một file đính kèm.',
        unread: 0,
    },
    {
        id: 2,
        name: 'Cựu sinh viên Bách Khoa',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        lastMessage: 'trực xuất khỏi khổ wall đã gửi ...',
        unread: 2,
    },
    {
        id: 3,
        name: 'Bao',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        lastMessage: 'k có tương tác với c...',
        unread: 0,
    },
];

export interface ChatListProps {
    onSelect?: (conv: ChatItemData) => void;
}

function ChatList({ onSelect }: ChatListProps) {
    return (
        <div className="flex flex-col overflow-y-auto flex-1 gap-1 px-2 py-2">
            {conversations.map((conv) => (
                <ChatItem key={conv.id} data={conv} onClick={() => onSelect && onSelect(conv)} />
            ))}
        </div>
    );
}

export default ChatList;
export * from './ChatItem';
