
import '../App.css';
import {useState} from "react";
import api from "../services/api.ts";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants.ts";
import {useNavigate} from "react-router";
import Loader from "../components/Loader.tsx";

function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (password !== ConfirmPassword) {
            console.log('passwords dont match');
            setLoading(false);
        }
        else{
            try{
                const res = await api.post("/api/auth/register/", {username,email, password});
                if (res.status===200) {
                    navigate('/login')
                }
            }
            catch(error){
                console.log(error);
                alert(error)
            }finally {
                setLoading(false);
            }
        }

    }
    return (<div className={'w-screen h-screen flex items-center justify-center bg-bg-primary'}>
            {loading ?
                <Loader/> :
                <div className={'border-[1px] border-bd-primary border-solid p-8 rounded-2xl bg-bg-secondary'}>
                    <h3 className={'text-txt-primary mb-3 text-2xl font-bold'}>
                        Register
                    </h3>
                    <form autoComplete="off" onSubmit={handleSubmit}
                          className={'w-full h-full flex flex-col items-center gap-2 justify-center '}>
                        <input
                            className={'bg-white px-2 py-2.5 rounded-md border-solid border-bd-primary w-full border-[1px] text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 '}
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className={'bg-white px-2 py-2.5 rounded-md border-solid border-bd-primary w-full border-[1px] text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 '}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className={'bg-white px-2 py-2.5 rounded-md border-solid border-bd-primary w-100% border-[1px] text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 '}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className={'bg-white px-2 py-2.5 rounded-md border-solid border-bd-primary w-full border-[1px] text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 '}
                            type="password"
                            name="Confirmpassword"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="submit"
                                className="py-2 px-4 bg-btn-primary hover:bg-blue-700 focus:ring-blue-500 text-txt-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Login
                        </button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Register;