import axios from "axios";

const axiosPublic=axios.create({
    // baseURL:'https://cloth-server-tan.vercel.app'
    baseURL:'https://cloth-server-tan.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;