import {useState} from "react";
import api from "@/services/api.ts";
import {useNavigate} from "react-router";
import {RegisterForm} from "@/components/register-form.tsx";

function Register() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (username,email,password,confirmPassword) => {
        if (password !== confirmPassword) {
            setError('Passwords dont match');
            return;
        }

        try {
            const res = await api.post("/api/auth/register/", {username, email, password});
            if (res.status === 200) {
                navigate('/login')
                //todo: add email verification or direct login
            }
        } catch (error: any) {
            if (error.status === 400) {
                setError('A user with that username already exists');

            } else {
                setError('An unknown error occurred');
            }
            return;
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <RegisterForm handleSubmit={handleSubmit} error={error}/>
            </div>
        </div>

    );
}

export default Register;