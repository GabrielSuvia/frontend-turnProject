import {createSlice} from '@reduxjs/toolkit';

const initialState = {user: JSON.parse(localStorage.getItem('user')) || null}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        logIn: (state, action)=>{
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(state.user))
        },
        logOut:(state)=>{
            state.user = null;
            localStorage.removeItem('user')
        }
    }

})

export const {logIn, logOut} = userSlice.actions//metodos del reducer

export default userSlice.reducer;