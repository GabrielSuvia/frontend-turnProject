import { useDispatch, useSelector } from "react-redux"
import {reservationAdd} from "../redux/sliceReserve"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styles from "./turnModule.module.css"

const workHours = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"]


const CreateTurnForm = ()=>{

const navigate = useNavigate();
const dispatch = useDispatch();    
const userOne = useSelector((state)=> state.User.user)//revisar propiedades del usuario

const [turn,setTurn] = useState({
date: "",
time:"",
userId: 0,
status:""
});


const handleCreateTurn =(event)=>{//automatico
   const {name,value} = event.target;
  //al darle cada horario va a re renderizar una y otra vez cada vezz que seleccione otro horario
  console.log( {...turn, date:"20/08/2024",[name]:value , userId:userOne.id, status:"true"})
       setTurn( {...turn, date: new Date().toISOString(),[name]:value , userId:userOne.id, status:"true"} )
       
} 

const handleFormTurn = (e)=>{
    e.preventDefault();

console.log(turn,"turn")

    axios.post("https://my-four-app-production.up.railway.app/turn/schedule", turn)
    .then((response)=>{console.log(response.data)
        dispatch(reservationAdd(response.data))
        navigate('/MisTurnos')
    })
    .catch((error)=>console.log(error))
      
}

return(<>
<h2 className={styles.title}>Reserve Turns</h2>
<form onSubmit={handleFormTurn} className={styles.formContein}>
   <select name="time" value={turn.time} onChange={handleCreateTurn} >
         <option value="">Select Hour</option>
         {workHours.map((hour,index)=>{
          return <option key={index} value={hour}>{hour}</option>
         })}
    </select>
    <button type="submit" className={styles.boton}>Create Turns</button>
</form>
</>)
}
export default CreateTurnForm;