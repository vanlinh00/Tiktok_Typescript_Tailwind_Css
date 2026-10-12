import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { loginService } from '~/services/authService';

function Login() {
    const navigate = useNavigate();

    // UI State
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Atomic update for input fields
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
        if (error) setError(null);
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await loginService(credentials.username, credentials.password);

            if (result?.success && result?.data?.access_token) {
                const { access_token } = result.data;

                localStorage.setItem('token', access_token);
                localStorage.setItem('user', JSON.stringify({ loginId: credentials.username }));

                navigate('/', { replace: true });
                window.location.reload();
            } else {
                throw new Error(result?.message || 'Invalid server response');
            }
        } catch (err: any) {
            setError(err?.message || 'Authentication error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-60px)] bg-neutral-50 px-4 py-8">
            <form className="w-full max-w-[420px] p-8 md:p-10 bg-white border border-[rgba(22,24,35,0.12)] rounded-2xl shadow-sm flex flex-col items-center" onSubmit={handleLogin} noValidate>
                <h2 className="text-3xl font-black text-[#161823] mb-8 text-center tracking-tight">Log in</h2>

                {error && <div className="w-full mb-4 px-4 py-3 bg-red-50 border border-red-200 text-[#fe2c55] rounded-lg text-sm font-semibold text-center">{error}</div>}

                <div className="w-full mb-3">
                    <input
                        className="w-full h-11 px-4 bg-[rgba(22,24,35,0.06)] border border-transparent rounded-lg outline-none text-base text-[#161823] focus:bg-white focus:border-[rgba(22,24,35,0.2)] transition-colors placeholder-[rgba(22,24,35,0.4)]"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <div className="w-full mb-3">
                    <input
                        className="w-full h-11 px-4 bg-[rgba(22,24,35,0.06)] border border-transparent rounded-lg outline-none text-base text-[#161823] focus:bg-white focus:border-[rgba(22,24,35,0.2)] transition-colors placeholder-[rgba(22,24,35,0.4)]"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <Button primary large className="!w-full !mt-4 !py-3 !text-base" type="submit" disabled={isLoading}>
                    {isLoading ? 'Authenticating...' : 'Log in'}
                </Button>
            </form>
        </div>
    );
}

export default Login;
