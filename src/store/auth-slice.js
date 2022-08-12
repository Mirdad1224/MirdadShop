import { createSlice } from "@reduxjs/toolkit";


const initialState = {isAuthenticated: false}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        },
    }
})

export default AuthSlice