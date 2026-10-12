const AUTH_BASE_URL = 'http://localhost:8080/oauth/token';
const CLIENT_AUTH = 'Basic bW9iaWxlLWNsaWVudDptb2JpbGUtY2xpZW50';

export interface LoginResponse {
    access_token?: string;
    token_type?: string;
    refresh_token?: string;
    expires_in?: number;
    scope?: string;
    [key: string]: any;
}

export const loginService = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(AUTH_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: CLIENT_AUTH,
        },
        body: JSON.stringify({
            username,
            password,
            deviceToken: 'deviceTokendd',
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Authentication failed');
    }

    return response.json();
};
