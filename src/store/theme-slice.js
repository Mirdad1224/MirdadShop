import { createSlice } from "@reduxjs/toolkit";


const initialState = {isLight: true}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggle(state){
            state.isLight = !state.isLight
        }
    }
})

export default ThemeSlice