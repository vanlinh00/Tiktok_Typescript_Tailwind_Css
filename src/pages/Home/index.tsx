import React, { useState } from 'react';
import Video, { VideoData } from '~/components/Video';

// Mock data for videos
const MOCK_VIDEOS: VideoData[] = [
    {
        id: 1,
        file_url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        user: {
            nickname: '@kaoquyphi',
            full_name: 'Kao Quy Phi',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        },
        description: 'Thà cá vào công dễ làm gì 🐟 #trending #viral #fyp',
        likes_count: '62.4K',
        comments_count: 112,
        shares_count: 2408,
    },
    {
        id: 2,
        file_url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        user: {
            nickname: '@foodlover',
            full_name: 'Saigon Street Food',
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
        },
        description: 'Amazing food content! 🍱 Hương vị đường phố cực đỉnh',
        likes_count: '45.2K',
        comments_count: 89,
        shares_count: 1230,
    },
    {
        id: 3,
        file_url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        user: {
            nickname: '@creative_mind',
            full_name: 'Creative Mind Studio',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        },
        description: 'Love this aesthetic moment ❤️ #art #creative #lifestyle',
        likes_count: '128.9K',
        comments_count: 456,
        shares_count: 5601,
    },
];

function Home() {
    const [videos] = useState<VideoData[]>(MOCK_VIDEOS);

    return (
        <div className="flex flex-col items-center w-full py-2">
            {videos.map((video) => (
                <Video key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Home;
