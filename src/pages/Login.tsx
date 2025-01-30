import '../App.css';
import {useState} from "react";
import api from "@/services/api.ts";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "@";
import {useNavigate} from "react-router";
import {LoginForm} from "@/components/login-form.tsx";

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (email:string,password:string) => {
        console.log(email,password);
        try {
            const res = await api.post("/api/auth/token/", {email, password});
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)

            navigate('/')
        } catch (error: any) {
            if (error.status === 401) {
                setError('Username or password is incorrect');
            }
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm handleSubmit={handleSubmit} error={error} />
            </div>
        </div>
    );
}

export default Login;