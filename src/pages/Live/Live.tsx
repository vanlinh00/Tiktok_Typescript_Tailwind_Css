import React, { useState, useEffect } from 'react';
import LiveItem, { LiveItemData } from './LiveItem';

const MOCK_LIVE: LiveItemData[] = [
    {
        id: 1,
        user: 'theanh28entertainment',
        desc: 'Tin tức nóng hổi 24h cùng các bình luận viên',
        viewers: '12.5K',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        thumb: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 2,
        user: 'mixigaming_official',
        desc: 'Giao lưu cuối tuần cùng bộ tộc MixiGaming',
        viewers: '48.2K',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        thumb: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 3,
        user: 'music_acoustic_live',
        desc: 'Hát live theo yêu cầu - Đêm nhạc acoustic chill',
        viewers: '8.9K',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80',
    },
    {
        id: 4,
        user: 'chef_vietnam',
        desc: 'Nấu ăn đêm khuya - Hướng dẫn làm món ngon tại nhà',
        viewers: '15.1K',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
        thumb: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80',
    },
];

function Live() {
    const [liveList, setLiveList] = useState<LiveItemData[]>([]);

    useEffect(() => {
        setLiveList(MOCK_LIVE);
    }, []);

    return (
        <div className="py-4 px-2 w-full">
            <header className="mb-6">
                <h2 className="text-2xl font-black text-[#161823] tracking-tight">Livestreams for you</h2>
                <p className="text-sm text-[rgba(22,24,35,0.6)] mt-1">Watch live broadcasts from creators worldwide</p>
            </header>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {liveList.length > 0 ? (
                    liveList.map((item) => <LiveItem key={item.id} data={item} />)
                ) : (
                    <div className="col-span-full py-20 text-center text-sm font-semibold text-neutral-400">Loading livestreams...</div>
                )}
            </main>
        </div>
    );
}

export default Live;
export * from './LiveItem';
