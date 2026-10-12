import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, HomeIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';

function Search() {
    const [query, setQuery] = useState<string>('');

    return (
        <div className="min-h-screen flex items-start justify-center p-8 md:p-12 bg-neutral-900 text-white">
            <div className="w-full max-w-[560px] flex flex-col gap-8">
                <Link to={config.routes.home} className="inline-flex items-center w-fit">
                    <img className="h-10 w-auto" src={images.logo} alt="TikTok" />
                </Link>

                <div className="flex items-center gap-4 w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/15 focus-within:border-white/30 transition-colors">
                    <SearchIcon className="w-6 h-6 text-white/70 shrink-0" />
                    <input
                        className="flex-1 bg-transparent border-0 outline-none text-white text-base placeholder-white/40"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                </div>

                <Link
                    to={config.routes.home}
                    className="inline-flex items-center gap-3 w-fit rounded-full px-5 py-3 bg-[#fe2c55]/20 hover:bg-[#fe2c55]/30 transition-colors cursor-pointer no-underline text-white font-bold"
                >
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#fe2c55]/30 text-[#fe2c55]">
                        <HomeIcon className="w-5 h-5 text-white" />
                    </span>
                    <span>For You</span>
                </Link>
            </div>
        </div>
    );
}

export default Search;
