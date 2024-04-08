import { useContext, useEffect, useState } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "./AuthProvider";




//he
const UseAdmin = () => {
    const [userInfo,setUserInfo] = useState([])
    const {user} = useContext(AuthContext);
    const axios = useAxios();
    useEffect(()=>{
        axios.get(`/user/admin/${user?.email}`)
        .then(res=>{
            setUserInfo(res.data)
        })
    },[axios, user?.email])
    return [userInfo]
};

export default UseAdmin;