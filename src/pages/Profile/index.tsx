import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';

const tabs = ['Videos', 'Reposts', 'Liked'];
const videos = [
    { id: 1, views: '12.8M', pinned: true },
    { id: 2, views: '20.8M', pinned: true },
    { id: 3, views: '22M', pinned: true },
    { id: 4, views: '647.5K' },
    { id: 5, views: '589.8K' },
    { id: 6, views: '5.5M' },
    { id: 7, views: '3.2M' },
    { id: 8, views: '1.9M' },
];

function Profile() {
    const { nickname } = useParams<{ nickname?: string }>();
    const username = nickname || 'crisdevilgamer7';
    const [activeTab, setActiveTab] = useState<string>('Videos');

    return (
        <div className="py-4 px-2 flex flex-col gap-6 w-full text-[#161823]">
            <div className="flex items-center gap-8 flex-wrap p-6 md:p-8 bg-neutral-50 border border-[rgba(22,24,35,0.12)] rounded-3xl">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#fe2c55]/20 shadow-md shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
                        alt="CrisDevilGamer"
                    />
                </div>

                <div className="flex-1 min-w-[260px]">
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                        <h1 className="text-2xl md:text-3xl font-black text-[#161823]">CrisDevilGamer</h1>
                        <span className="text-base text-[rgba(22,24,35,0.6)] font-semibold">| {username}</span>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#20d5ec] text-white text-[11px] font-bold">✔</span>
                    </div>

                    <div className="flex items-center gap-6 mb-4 flex-wrap">
                        <div className="flex items-center gap-1.5">
                            <strong className="text-base font-bold text-[#161823]">4</strong>
                            <span className="text-sm text-[rgba(22,24,35,0.6)]">Following</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <strong className="text-base font-bold text-[#161823]">6M</strong>
                            <span className="text-sm text-[rgba(22,24,35,0.6)]">Followers</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <strong className="text-base font-bold text-[#161823]">98.4M</strong>
                            <span className="text-sm text-[rgba(22,24,35,0.6)]">Likes</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap mb-4">
                        <Button primary large className="!min-w-[130px] !py-2.5">
                            Follow
                        </Button>
                        <Button outline large className="!min-w-[120px] !py-2.5">
                            Message
                        </Button>
                    </div>

                    <p className="text-sm text-[rgba(22,24,35,0.8)] leading-relaxed">CrisDevilGamer's Official TikTok Channel 🎮</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-[rgba(22,24,35,0.12)] pb-1">
                <div className="flex items-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={`text-base font-bold px-6 py-2 cursor-pointer transition-colors relative ${
                                activeTab === tab
                                    ? 'text-[#161823] after:content-[\'\'] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-[#161823]'
                                    : 'text-[rgba(22,24,35,0.5)] hover:text-[#161823]'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button className="text-xs font-bold px-3 py-1.5 rounded-full bg-neutral-100 text-[#161823] cursor-pointer">Latest</button>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-full text-[rgba(22,24,35,0.6)] hover:bg-neutral-100 cursor-pointer">Popular</button>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-full text-[rgba(22,24,35,0.6)] hover:bg-neutral-100 cursor-pointer">Oldest</button>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {videos.map((video) => (
                    <div key={video.id} className="relative rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900 group cursor-pointer shadow-xs">
                        {video.pinned && (
                            <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[11px] font-bold text-white bg-[#fe2c55]">
                                Pinned
                            </span>
                        )}
                        <div className="w-full h-full bg-gradient-to-tr from-[#fe2c55]/80 via-purple-700/80 to-blue-600/80 group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                            <span className="text-white text-xs font-bold drop-shadow-xs">
                                <strong>▶ {video.views}</strong>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
