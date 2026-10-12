import * as httpRequest from '~/utils/httpRequest';

export interface SearchResultUser {
    id: number | string;
    nickname: string;
    full_name: string;
    avatar: string;
    tick: boolean;
    bio?: string;
    followers_count?: number;
    likes_count?: number;
    [key: string]: any;
}

export const search = async (q: string, type: string = 'less'): Promise<SearchResultUser[] | undefined> => {
    try {
        const res = await httpRequest.get<{ data: SearchResultUser[] }>('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};
