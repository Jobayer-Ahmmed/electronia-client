import axios from "axios";



const useAxios=()=>{

    const createAxios = axios.create({
        // baseURL:"http://localhost:5000"
        baseURL:"https://electronia-server.vercel.app"

    })
    return createAxios
}

export default useAxios

