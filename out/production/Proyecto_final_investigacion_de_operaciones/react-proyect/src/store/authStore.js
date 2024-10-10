import { create } from "zustand";

const initialState = {
    isLoggedIn : false,
    token : "",
    userId : 0,
}

export const authStore = create((set, get)=>({
    authState : initialState,
    users: [],
    setAuth : (newAuth) => {

        const newState = {
        ...newAuth,
       };

        set({authState: newState })
    },
    setUsers: (users)=>{
        set({users})
    }
}));