import {createSlice} from '@reduxjs/toolkit';


const initialState = {reservation: []};

const reservationSlide = createSlice({
    name:'reserve',
    initialState,
    reducers:{
        reservationAdd: (state, action)=>{//actions
            const existingTurnIndex = state.reservation.findIndex(item => item.id === action.payload.id);
    if (existingTurnIndex !== -1) {
  
        state.reservation[existingTurnIndex] = action.payload;
    } else {
        state.reservation.push(action.payload);
    }
    console.log(state.reservation);

        },
        removeReserve:(state,action)=>{//action.payload = objeto recibido
            console.log("redux1",action.payload)
          const turnIndex = state.reservation.findIndex((ele)=> ele.id === action.payload )
          const turnChanged = state.reservation.find((tur)=> tur.id ===action.payload )
          if(turnIndex !== -1){
             turnChanged.status="false"
            state.reservation[turnIndex]={...state.reservation[turnIndex], ...turnChanged}
            console.log("redux3",state.reservation[turnIndex])
          }
           
        },
        resetReserve:(state)=>{
            state.reservation=[];
            
        }
    }
});

export const {reservationAdd,removeReserve,resetReserve} = reservationSlide.actions;//metodos del reducers

export default reservationSlide.reducer;