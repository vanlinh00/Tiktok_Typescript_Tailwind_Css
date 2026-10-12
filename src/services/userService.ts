const API_BASE = 'http://localhost:9092/api';

export interface UserFollowingItem {
    id: number | string;
    file_url: string;
    user: {
        nickname: string;
        full_name: string;
        avatar: string;
        tick: boolean;
    };
}

export const getFollowingList = async (): Promise<UserFollowingItem[]> => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_BASE}/users/list`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) throw new Error('Failed to fetch following list');

    const result = await response.json();

    if (!result.success) throw new Error(result.message || 'Data fetch unsuccessful');

    return (result.data || []).map((item: any) => ({
        id: item.id,
        file_url: '',
        user: {
            nickname: item.loginId,
            full_name: item.fullName,
            avatar: item.avatar || 'https://via.placeholder.com/150',
            tick: item.role === 'ROLE_ADMIN',
        },
    }));
};
