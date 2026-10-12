import React, { useState } from 'react';
import ChatList, { ChatItemData } from '~/components/ChatList/ChatList';
import ChatWindow from '~/components/ChatWindow/ChatWindow';

function Chat() {
    const [selectedConv, setSelectedConv] = useState<ChatItemData | null>(null);

    return (
        <div className="h-[calc(100vh-84px)] w-full border border-[rgba(22,24,35,0.12)] rounded-2xl overflow-hidden bg-white shadow-sm my-1">
            <div className="flex h-full">
                <aside className="w-72 md:w-80 border-r border-[rgba(22,24,35,0.12)] h-full flex flex-col bg-white shrink-0">
                    <div className="px-5 py-4 font-bold text-lg border-b border-[rgba(22,24,35,0.12)] text-[#161823]">
                        Messages
                    </div>
                    <ChatList onSelect={(conv) => setSelectedConv(conv)} />
                </aside>
                <main className="flex-1 h-full bg-white overflow-hidden">
                    <ChatWindow conversation={selectedConv} />
                </main>
            </div>
        </div>
    );
}

export default Chat;
