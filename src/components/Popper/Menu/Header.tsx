import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HeaderProps {
    title?: string;
    onBack: () => void;
}

function Header({ title, onBack }: HeaderProps) {
    return (
        <header className="relative shrink-0 h-[50px] -mt-2 flex items-center">
            <button
                className="w-[50px] h-full bg-transparent flex items-center justify-center cursor-pointer text-[#161823] hover:opacity-70 transition-opacity"
                onClick={onBack}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-bold text-[#161823] pointer-events-none truncate max-w-[140px]">
                {title}
            </h4>
        </header>
    );
}

export default Header;
