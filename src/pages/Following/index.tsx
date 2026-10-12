import React, { useEffect, useState, useCallback } from 'react';
import FollowingAccountItem, { FollowingAccountData } from '~/components/Following';
import * as userService from '~/services/userService';

function Following() {
    const [users, setUsers] = useState<FollowingAccountData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchFollowingData = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await userService.getFollowingList();
            setUsers(data || []);
        } catch (err: any) {
            setError(err?.message || 'Error fetching following accounts');
            console.error('[Following Page Error]:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFollowingData();
    }, [fetchFollowingData]);

    if (isLoading) {
        return <div className="py-20 text-center text-sm font-semibold text-neutral-400">Loading accounts...</div>;
    }

    if (error) {
        return <div className="py-20 text-center text-sm font-semibold text-[#fe2c55]">Error: {error}</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-4">
            {users.length > 0 ? (
                users.map((user, index) => <FollowingAccountItem key={`${user.id}-${index}`} data={user} />)
            ) : (
                <div className="col-span-full py-20 text-center text-sm font-semibold text-neutral-400">
                    You aren't following anyone yet.
                </div>
            )}
        </div>
    );
}

export default Following;
