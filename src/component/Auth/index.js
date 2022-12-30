import React from "react";
import { useSelector } from "react-redux";
import { getUserToken } from "../../module/user/userSelector";


const Auth =({children}) =>{

    const token = useSelector(getUserToken);

    const getView = () => {
        if(!token){
            window.location.assign("/login")
        }
        return children;
    }

    return <>{getView()}</>
}

export default Auth;
