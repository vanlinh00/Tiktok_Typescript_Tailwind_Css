import React, { useEffect, useState, useRef, ChangeEvent } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import { SearchResultUser } from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

function Search() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResult, setSearchResult] = useState<SearchResultUser[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);

            setSearchResult(result || []);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current?.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs: Record<string, any>) => (
                    <div className="w-[360px]" tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className="px-3 py-1.5 text-xs font-semibold text-[rgba(22,24,35,0.5)]">Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="relative h-[46px] w-[360px] pl-4 flex items-center bg-[rgba(22,24,35,0.06)] rounded-full border border-transparent focus-within:border-[rgba(22,24,35,0.2)] after:content-[''] after:absolute after:top-2.5 after:bottom-2.5 after:right-[52px] after:w-[1px] after:bg-[rgba(22,24,35,0.12)] transition-colors">
                    <input
                        ref={inputRef}
                        className="flex-1 h-full pr-10 text-base text-[#161823] placeholder-[rgba(22,24,35,0.4)] bg-transparent outline-none caret-[#fe2c55]"
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            type="button"
                            className="absolute right-[64px] top-1/2 -translate-y-1/2 text-[rgba(22,24,35,0.34)] hover:text-[rgba(22,24,35,0.6)] cursor-pointer text-sm bg-transparent border-0 p-1"
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className="absolute right-[64px] top-1/2 -translate-y-1/2 text-[rgba(22,24,35,0.34)] text-sm animate-spin"
                            icon={faSpinner}
                        />
                    )}

                    <button
                        type="button"
                        className="flex items-center justify-center w-[52px] h-full rounded-r-full text-[rgba(22,24,35,0.34)] hover:bg-[rgba(22,24,35,0.03)] hover:text-[rgba(22,24,35,0.75)] cursor-pointer transition-colors bg-transparent border-0"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon className="w-5 h-5" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
