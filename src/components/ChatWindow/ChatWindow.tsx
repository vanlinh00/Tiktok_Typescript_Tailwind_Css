import React, { useState } from 'react';
import MessageBubble, { MessageData } from './MessageBubble';
import { ChatItemData } from '~/components/ChatList';

const sampleMessages: MessageData[] = [
    { id: 1, text: 'Hello!', fromMe: false },
    { id: 2, text: 'Hi, how are you?', fromMe: true },
    { id: 3, text: "I'm good, thanks!", fromMe: false },
];

export interface ChatWindowProps {
    conversation?: ChatItemData | null;
}

function ChatWindow({ conversation }: ChatWindowProps) {
    const [messages, setMessages] = useState<MessageData[]>(sampleMessages);
    const [input, setInput] = useState<string>('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages((prev) => [...prev, { id: Date.now(), text: input, fromMe: true }]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex items-center px-5 py-3.5 border-b border-[rgba(22,24,35,0.12)] bg-white shrink-0">
                {conversation ? (
                    <>
                        <img className="w-10 h-10 rounded-full mr-3 object-cover shadow-xs" src={conversation.avatar} alt={conversation.name} />
                        <span className="font-bold text-base text-[#161823]">{conversation.name}</span>
                    </>
                ) : (
                    <span className="text-sm font-semibold text-neutral-400">Select a chat to start conversation</span>
                )}
            </div>
            <div className="flex-1 p-5 overflow-y-auto flex flex-col">
                {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} isOwn={m.fromMe} />
                ))}
            </div>
            <div className="flex items-center gap-2 p-3.5 border-t border-[rgba(22,24,35,0.12)] bg-white">
                <input
                    className="flex-1 px-4 py-2.5 bg-neutral-100 border border-transparent rounded-full text-sm text-[#161823] focus:outline-none focus:bg-white focus:border-[rgba(22,24,35,0.2)] transition-colors placeholder:text-neutral-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Send a message..."
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                    className="px-5 py-2.5 bg-[#fe2c55] hover:bg-[#ef2950] text-white text-sm font-bold rounded-full transition-colors cursor-pointer disabled:opacity-50"
                    onClick={sendMessage}
                    disabled={!input.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
export * from './MessageBubble';
