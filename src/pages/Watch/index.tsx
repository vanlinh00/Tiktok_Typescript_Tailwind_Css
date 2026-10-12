import React, { useEffect, useMemo, useRef, useState } from 'react';

export interface FeedComment {
    id: number;
    user: string;
    text: string;
}

export interface FeedItem {
    id: string;
    nickname: string;
    fullname: string;
    caption: string;
    src: string;
    poster: string;
    stats: {
        likes: string;
        comments: string;
        shares: string;
    };
    commentsCount: string;
    comments: FeedComment[];
}

const FEED: FeedItem[] = [
    {
        id: '1',
        nickname: 'capyboii',
        fullname: 'Son Tung M-TP',
        caption:
            'MAKING MY WAY is officially out now !!! Show me your hands if you guys are listening to MAKING MY WAY...',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1025/720/1280',
        stats: { likes: '1.3M', comments: '17.4K', shares: '22.3K' },
        commentsCount: '17400',
        comments: [
            { id: 1, user: 'MINH', text: 'Ra MV sớm đi sếp ơi' },
            { id: 2, user: 'Thanh T', text: 'Đẹp xỉu lên xỉu xuống huhu' },
            { id: 3, user: 'Huy', text: 'Nghe cuốn thật sự' },
        ],
    },
    {
        id: '2',
        nickname: 'denvau',
        fullname: 'Đen Vâu',
        caption: 'Nghe bài này lúc đêm muộn là đúng bài chill.',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1005/720/1280',
        stats: { likes: '842K', comments: '9.1K', shares: '4.6K' },
        commentsCount: '9100',
        comments: [
            { id: 1, user: 'Lan', text: 'Chill ghê' },
            { id: 2, user: 'Khoa', text: 'Nghe phát nghiện' },
        ],
    },
    {
        id: '3',
        nickname: 'kaoquyphi',
        fullname: 'Kao Quý Phi',
        caption: 'Đoạn này hay quá trời ơi. Đỉnh nóc kịch trần.',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1011/720/1280',
        stats: { likes: '2.1M', comments: '31K', shares: '58K' },
        commentsCount: '31000',
        comments: [
            { id: 1, user: 'Duy', text: 'Replay 100 lần' },
            { id: 2, user: 'Vy', text: 'Đỉnh thật' },
            { id: 3, user: 'Hà', text: 'Cười xỉu' },
        ],
    },
];

interface VideoState {
    loading: boolean;
    error: boolean;
}

function Watch() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [videoStates, setVideoStates] = useState<VideoState[]>(() =>
        FEED.map(() => ({ loading: true, error: false }))
    );
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');

    const feedRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);

    const activeVideo = useMemo(() => FEED[activeIndex] ?? FEED[0], [activeIndex]);

    useEffect(() => {
        const root = feedRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (!visible) return;
                const nextIndex = Number(visible.target.getAttribute('data-index'));
                if (!Number.isNaN(nextIndex)) setActiveIndex(nextIndex);
            },
            { root, threshold: [0.65, 0.8, 0.92] }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setIsFollowing(false);
        setComment('');
    }, [activeIndex]);

    const scrollToIndex = (nextIndex: number) => {
        const el = itemRefs.current[nextIndex];
        if (!el) return;
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return (
        <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden z-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] bg-white">
            <div className="min-w-0 flex relative bg-neutral-900 overflow-hidden">
                <div
                    ref={feedRef}
                    className="h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {FEED.map((item, index) => {
                        const state = videoStates[index] ?? { loading: true, error: false };
                        const isActive = index === activeIndex;

                        return (
                            <section
                                key={item.id}
                                className="h-[100dvh] w-full grid place-items-center snap-start snap-always p-4"
                                data-index={index}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                            >
                                <div className="relative h-[min(calc(100dvh-32px),880px)] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
                                    {state.error ? (
                                        <div className="absolute inset-0 grid place-content-center gap-2 p-4 text-center bg-black/80 text-white">
                                            <div className="font-extrabold text-lg">Video cannot be loaded</div>
                                            <div className="text-xs text-white/70 max-w-[280px]">
                                                Please try again or replace the media URL.
                                            </div>
                                        </div>
                                    ) : null}

                                    <video
                                        className={`w-full h-full object-cover ${state.error ? 'hidden' : ''}`}
                                        src={item.src}
                                        controls
                                        autoPlay={isActive}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        poster={item.poster}
                                        onLoadedData={() =>
                                            setVideoStates((prev) => {
                                                const next = [...prev];
                                                next[index] = { loading: false, error: false };
                                                return next;
                                            })
                                        }
                                        onError={() =>
                                            setVideoStates((prev) => {
                                                const next = [...prev];
                                                next[index] = { loading: false, error: true };
                                                return next;
                                            })
                                        }
                                    />

                                    {state.loading && !state.error ? (
                                        <div className="absolute inset-0 grid place-items-center font-bold text-white bg-black/60 backdrop-blur-xs">
                                            Loading…
                                        </div>
                                    ) : null}
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 grid gap-3 z-10">
                    <button
                        className="w-10 h-10 rounded-full border border-white/20 bg-black/60 hover:bg-black/80 text-white font-bold flex items-center justify-center cursor-pointer transition-colors shadow-md"
                        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                        aria-label="Previous"
                    >
                        ↑
                    </button>
                    <button
                        className="w-10 h-10 rounded-full border border-white/20 bg-black/60 hover:bg-black/80 text-white font-bold flex items-center justify-center cursor-pointer transition-colors shadow-md"
                        onClick={() => scrollToIndex(Math.min(FEED.length - 1, activeIndex + 1))}
                        aria-label="Next"
                    >
                        ↓
                    </button>
                </div>
            </div>

            <div className="min-w-0 border-l border-[rgba(22,24,35,0.12)] bg-white flex flex-col p-5 h-full overflow-hidden">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[rgba(22,24,35,0.08)] shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#fe2c55] to-cyan-400 shrink-0" />
                        <div className="min-w-0">
                            <div className="font-extrabold text-base text-[#161823] leading-tight truncate">
                                {activeVideo.nickname}
                            </div>
                            <div className="text-xs text-[rgba(22,24,35,0.6)] leading-tight truncate">
                                {activeVideo.fullname}
                            </div>
                        </div>
                    </div>

                    <button
                        className={`h-9 px-4 rounded-full border text-sm font-bold cursor-pointer transition-colors shrink-0 ${
                            isFollowing
                                ? 'bg-neutral-100 text-[#161823] border-neutral-300'
                                : 'bg-[#fe2c55] text-white border-[#fe2c55] hover:bg-[#ef2950]'
                        }`}
                        onClick={() => setIsFollowing((v) => !v)}
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div className="text-sm text-[#161823] leading-relaxed my-3 shrink-0">
                    {activeVideo.caption}
                </div>

                <div className="flex gap-3 my-2 shrink-0">
                    <div className="flex-1 flex flex-col p-2.5 bg-[rgba(22,24,35,0.03)] border border-[rgba(22,24,35,0.08)] rounded-xl text-center">
                        <span className="font-bold text-sm text-[#161823]">{activeVideo.stats.likes}</span>
                        <span className="text-[11px] text-[rgba(22,24,35,0.6)]">Likes</span>
                    </div>
                    <div className="flex-1 flex flex-col p-2.5 bg-[rgba(22,24,35,0.03)] border border-[rgba(22,24,35,0.08)] rounded-xl text-center">
                        <span className="font-bold text-sm text-[#161823]">{activeVideo.stats.comments}</span>
                        <span className="text-[11px] text-[rgba(22,24,35,0.6)]">Comments</span>
                    </div>
                    <div className="flex-1 flex flex-col p-2.5 bg-[rgba(22,24,35,0.03)] border border-[rgba(22,24,35,0.08)] rounded-xl text-center">
                        <span className="font-bold text-sm text-[#161823]">{activeVideo.stats.shares}</span>
                        <span className="text-[11px] text-[rgba(22,24,35,0.6)]">Shares</span>
                    </div>
                </div>

                <div className="flex items-baseline gap-2 pt-2 pb-1 shrink-0">
                    <span className="font-bold text-sm text-[#161823]">Comments</span>
                    <span className="text-xs text-[rgba(22,24,35,0.5)]">({activeVideo.commentsCount})</span>
                </div>

                <div className="flex-1 overflow-y-auto my-2 pr-1 divide-y divide-[rgba(22,24,35,0.06)]">
                    {activeVideo.comments.map((c) => (
                        <div key={c.id} className="grid grid-cols-[36px_1fr] gap-3 py-3">
                            <div className="w-9 h-9 rounded-full bg-[rgba(22,24,35,0.08)] shrink-0" />
                            <div className="min-w-0">
                                <div className="font-bold text-xs text-[#161823]">{c.user}</div>
                                <div className="text-sm text-[rgba(22,24,35,0.85)] mt-0.5 leading-snug">{c.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[rgba(22,24,35,0.12)] shrink-0">
                    <input
                        className="flex-1 h-10 rounded-full border border-[rgba(22,24,35,0.12)] bg-[rgba(22,24,35,0.04)] px-4 text-sm text-[#161823] outline-none"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Log in to comment"
                        disabled
                    />
                    <button
                        className="h-10 px-5 rounded-full bg-[#fe2c55] text-white font-bold text-sm opacity-50 cursor-not-allowed border-0"
                        disabled
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Watch;
