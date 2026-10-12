import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

export interface VideoData {
    id?: number | string;
    file_url: string;
    likes_count?: number | string;
    comments_count?: number | string;
    shares_count?: number | string;
    description?: string;
    user?: {
        nickname: string;
        full_name: string;
        avatar?: string;
    };
    [key: string]: any;
}

export interface VideoProps {
    data: VideoData;
}

function Video({ data }: VideoProps) {
    return (
        <div className="flex flex-col items-center py-6 gap-4 w-full max-w-full border-b border-[rgba(22,24,35,0.08)] last:border-b-0 pb-8">
            <div className="flex flex-col items-center w-full">
                {data.user && (
                    <div className="mb-3 text-center max-w-[400px]">
                        <h3 className="font-bold text-base text-[#161823] hover:underline cursor-pointer inline-block">
                            {data.user.nickname}
                        </h3>
                        {data.description && <p className="text-sm text-[#161823] mt-1 line-clamp-2">{data.description}</p>}
                    </div>
                )}

                <div className="flex items-end justify-center gap-4 w-full">
                    <div className="h-[520px] w-[310px] sm:h-[580px] sm:w-[350px] bg-black rounded-xl overflow-hidden shrink-0 shadow-md">
                        <video className="w-full h-full object-cover" controls src={data.file_url} loop />
                    </div>

                    <div className="flex flex-col gap-4 shrink-0 pb-2">
                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                className="w-12 h-12 bg-[rgba(22,24,35,0.06)] rounded-full flex items-center justify-center text-lg text-[#161823] cursor-pointer transition-all hover:bg-[rgba(22,24,35,0.12)] hover:text-[#fe2c55]"
                                aria-label="Like"
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <strong className="text-xs text-[rgba(22,24,35,0.75)] font-bold">{data.likes_count ?? 0}</strong>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                className="w-12 h-12 bg-[rgba(22,24,35,0.06)] rounded-full flex items-center justify-center text-lg text-[#161823] cursor-pointer transition-all hover:bg-[rgba(22,24,35,0.12)] hover:text-[#fe2c55]"
                                aria-label="Comment"
                            >
                                <FontAwesomeIcon icon={faCommentDots} />
                            </button>
                            <strong className="text-xs text-[rgba(22,24,35,0.75)] font-bold">{data.comments_count ?? 0}</strong>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                className="w-12 h-12 bg-[rgba(22,24,35,0.06)] rounded-full flex items-center justify-center text-lg text-[#161823] cursor-pointer transition-all hover:bg-[rgba(22,24,35,0.12)] hover:text-[#fe2c55]"
                                aria-label="Bookmark"
                            >
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                            <strong className="text-xs text-[rgba(22,24,35,0.75)] font-bold">{data.shares_count ?? 0}</strong>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                className="w-12 h-12 bg-[rgba(22,24,35,0.06)] rounded-full flex items-center justify-center text-lg text-[#161823] cursor-pointer transition-all hover:bg-[rgba(22,24,35,0.12)] hover:text-[#fe2c55]"
                                aria-label="Share"
                            >
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                            <strong className="text-xs text-[rgba(22,24,35,0.75)] font-bold">{data.shares_count ?? 0}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
