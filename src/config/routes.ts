export interface RoutesConfig {
    home: string;
    following: string;
    profile: string;
    upload: string;
    search: string;
    live: string;
    newHome: string;
    chat: string;
    watch: string;
}

const routes: RoutesConfig = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
    newHome: '/new-home',
    chat: '/chat',
    watch: '/watch',
};

export default routes;
