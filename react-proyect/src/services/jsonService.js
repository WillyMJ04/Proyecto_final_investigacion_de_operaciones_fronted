import { api } from "../config/axiosConfig"


export const getUsers = async ()=>{
    const response = await api.get("/users")
    return response.data;
}