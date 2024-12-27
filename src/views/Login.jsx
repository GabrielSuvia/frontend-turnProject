import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css"
import ValidateLogin from "../helpers/validateLogin.js";
import {useDispatch} from "react-redux";
import {logIn} from "../redux/sliceUser.jsx"
import { pathBackend } from "../helpers/path.js";


const Login = ()=>{
const dispatch = useDispatch();
const Navigate = useNavigate();

const [login, setLogin] = useState({
    userName:"",
    password:""
});

const [errors, setErrors] = useState({
    userName:"username is required",
    password:"password is required"
})
console.log(errors)
//catch all field of the interface
const handleOnchange = (event)=>{
const {name, value} = event.target;//recoje todos los valores del formulario junto con su nombre

setLogin({
    ...login, [name]:value             
})
    setErrors(ValidateLogin(login))//objeto de errors puede quedar vacio
};

const handleSubmitForm = (e)=>{
    e.preventDefault();
     axios.post(`${pathBackend}/user/login`, login, 
        {headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => {console.log("INFORMATION OF AXIOS.POST",response.data);
       
        dispatch(logIn(response.data));//??????
        Navigate("/MisTurnos");
       })
      .catch((error)=>console.log("Erro", error))
      alert("Logeo exitoso...")
      
       
};


    return (<div>
   
    <form onSubmit={handleSubmitForm} className={styles.formContein}>
         <h1 style={{color:"#5260DB",position:"relative",margin:'0px'}}>Login</h1>
         <div className={styles.entrada1} >
            <label style={{color:'#5260DB', width:'75px',height:'25px',lineHeight: '1.5'}}>Username</label>
            <input type="text" name="userName" value={login.userName} onChange={handleOnchange} className={styles.input1}/>
            {errors.userName? <p style={{lineHeight: '1.5', color:'red', width:'270px', height:'30px',margin:'0'}}>{errors.userName}</p>:<p style={{width:'270px', height:'40px'}}></p>}
        </div>

        <div className={styles.entrada2}>
            <label style={{color:'#5260DB', width:'75px',height:'25px',lineHeight: '1.5'}}>Password</label>
            <input type="password" name="password" value={login.password} onChange={handleOnchange} className={styles.input2} />
            {errors.password?<p style={{lineHeight: '1.5', color:'red', width:'270px', height:'30px', margin:'0'}}>{errors.password}</p>:<p style={{width:'270px', height:'30px'}}></p>}
      </div>
          <button type="submit" className={styles.boton}>Enter</button>
    </form>
    </div>
    )
}

export default Login;