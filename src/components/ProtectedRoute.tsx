import {useNavigate} from 'react-router'
import {useState, useEffect} from "react";
import {jwtDecode} from 'jwt-decode'
import api from "../services/api.ts";
import {REFRESH_TOKEN,ACCESS_TOKEN} from "../constants.ts";
import {ReactNode} from "react";
import Loader from "./Loader.tsx";


function ProtectedRoute({children}: {children: ReactNode}) {
    const [isAuthorized, setIsAuthorized] = useState<null|boolean>(null);
    const navigate = useNavigate();

    useEffect(()=>{
       auth().catch(()=> setIsAuthorized(false));
    })

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try{
            const res = await api.post("/api/token/refresh", {refresh: refreshToken})
            if (res.status===200) {
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                setIsAuthorized(true)
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if  (!token){
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp || -1;
        const now = Date.now() / 1000;
        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    }

    if (isAuthorized === null) {
        return <Loader/>
    }

    return isAuthorized ? children : navigate('/login')

}

export default ProtectedRoute;