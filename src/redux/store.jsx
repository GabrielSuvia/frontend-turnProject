import {configureStore} from '@reduxjs/toolkit';
import userSlice from './sliceUser';
import reservationSlice from './sliceReserve'

const store = configureStore({
    reducer:{
       User:userSlice,
       reserve:reservationSlice
    },
})
export default store;