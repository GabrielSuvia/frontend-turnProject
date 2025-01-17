import { useEffect } from 'react'
import Turns from '../components/turn.jsx'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {  reservationAdd} from '../redux/sliceReserve.jsx'
import { useNavigate } from 'react-router-dom'
import style from './titulo.module.css'
import { pathBackend } from '../helpers/path.js'


const MisTurno = ()=>{
    const dispatch = useDispatch();
    const userSelect = useSelector((state)=> state.User.user)
    const turnSelect = useSelector((state)=> state.reserve.reservation)//[]
    const navigate = useNavigate()

if(!userSelect){
    alert('Is necesary to login your users')
    return;
}
   
  console.log("turnSelect-misturno",turnSelect)

 const handleAddTurn = ()=>{
      navigate('/createTurn')
 }
  //catch user with the id and his turns array

   useEffect(()=>{
    
        axios.get(`${pathBackend}/user/${userSelect.id}`)
        .then((response) => {  response.data.turnId?.forEach((item)=>dispatch(reservationAdd(item)) )
            console.log("userId, turnId",response.data.turnId)
        })
        .catch((error)=> console.log(error))

        //al desmontarse el user
        /*
         return ()=>{dispatch(resetReserve())
            console.log("Activando el reset al salir usuario",turnSelect, userSelect)
         }*/

   },userSelect?[userSelect.id] : [])
   
    return(<div className={style.turnes}>

    <div>
    <h1 className={style.titulo}>Mis Turnos</h1>
    </div>
    
    <button onClick={handleAddTurn} className={style.boton}>Crear Nuevo turno</button>
   
        {turnSelect?.map((item,index)=>{
           return< Turns key={index} turn={item}/>
        })}

    </div>)
}

export default MisTurno