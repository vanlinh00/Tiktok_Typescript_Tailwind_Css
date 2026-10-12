import React from 'react';

export interface MessageData {
    id: number | string;
    text: string;
    fromMe?: boolean;
    [key: string]: any;
}

export interface MessageBubbleProps {
    message: MessageData;
    isOwn?: boolean;
}

function MessageBubble({ message, isOwn }: MessageBubbleProps) {
    return (
        <div
            className={`max-w-[70%] px-4 py-2 rounded-2xl mb-2.5 break-words text-sm leading-relaxed ${
                isOwn
                    ? 'bg-[#fe2c55] text-white self-end rounded-br-xs'
                    : 'bg-neutral-100 text-[#161823] self-start rounded-bl-xs'
            }`}
        >
            {message.text}
        </div>
    );
}

export default MessageBubble;
