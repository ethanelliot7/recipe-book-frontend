import {Navigate} from "react-router";
import {useEffect} from "react";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants.ts";

function Logout() {
    useEffect(()=>{
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    })

    return <Navigate to={'/'}/>
}

export default Logout;