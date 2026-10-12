import React, { ReactNode } from 'react';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

export interface ProfileLayoutProps {
    children?: ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <Header />
            <div className="w-full max-w-[1150px] px-4 md:px-6 pt-[60px] flex items-start">
                <Sidebar />
                <main className="flex-1 min-h-[calc(100vh-60px)] px-4 sm:px-6 py-4 pb-10">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default ProfileLayout;
