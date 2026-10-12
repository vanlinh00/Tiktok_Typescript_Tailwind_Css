import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserData {
    id?: number | string;
    username?: string;
    nickname?: string;
    full_name?: string;
    avatar?: string;
    role?: string;
    [key: string]: any;
}

export interface AuthContextType {
    currentUser: UserData | null;
    login: (userData: UserData, token: string) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    login: () => {},
    logout: () => {},
    loading: true,
});

export interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (storedUser && token) {
                setCurrentUser(JSON.parse(storedUser));
            }
        } catch (e) {
            console.error('Failed to parse stored user:', e);
        }
        setLoading(false);
    }, []);

    const login = (userData: UserData, token: string) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);
        setCurrentUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
