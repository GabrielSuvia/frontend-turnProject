import { useState } from "react";
import axios from "axios";
import Validate from "../helpers/validate.js";
import { useNavigate} from "react-router-dom";
import styles from "./Register.module.css";
import { pathBackend } from "../helpers/path.js";

const Register = ()=>{
const navigate = useNavigate();

const [userForm, setUserForm] = useState({
    userName:"",
    password:"", 
    name:"",
    email:"",
    birthdate:"",
    nDni:"",
})
const [errors, setErrors] = useState({
  userName:"userName is required",
    password:"password is required", 
    name:"name is required",
    email:"email is required",
    birthdate:"bithdate is required",
    nDni:"nDni is required",
});


    const handleOnchange = (event)=>{

        const {name,value} = event.target;

             setUserForm({...userForm, [name]:value})

               setErrors(Validate(userForm));
         };


  const handleSubmit = (e)=>{

    e.preventDefault();

       axios.post(`${pathBackend}/user/register`, userForm)
       .then((response)=>console.log(response.data))
       .catch((error)=> {
        console.error('errors to send the data', error);
        alert("faill data...");
       })

    alert("succesfully registered...");
   navigate("/login")
  };//onchange corre en tiempo de ejecucion

    return (<div>
   <div className={styles.formContainer}>

       <form onSubmit={handleSubmit}>
       <h1 style={{margin:'20px',position:'relative',left:'30%',color:'#5260DB'}}>Register</h1>
       
       <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}}>username</label>
        <input type="text" name="userName" value={userForm.userName} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}} />
      {errors.userName? <p style={{color:'red',position: 'relative', width:'260px', height:'50'}}>{errors.userName}</p>:<p style={{width:'200', height:'50px'}}></p>}
      </div>

      <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}}>password</label>
        <input type="password" name="password" value={userForm.password} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}}/>
        {errors.password? <p style={{color:'red',position: 'relative', width:'260px', height:'50'}}>{errors.password}</p>:<p style={{width:'200', height:'50px'}}></p>}
     </div>

     <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}}>name</label>
        <input type="text" name="name" value={userForm.name} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}}/>
        {errors.name? <p style={{color:'red', position: 'relative', width:'260px', height:'50'}}>{errors.name}</p>:<p style={{width:'200', height:'50px'}}></p>}
      </div>

      <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}} >email</label>
        <input type="email" name="email" value={userForm.email} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}}/>
        {errors.email? <p style={{color:'red', position: 'relative', width:'260px', height:'50'}}>{errors.email}</p>:<p style={{width:'200', height:'50px'}}></p>}
      </div> 
      
      <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}}>birthdate</label>
        <input type="text" name="birthdate" value={userForm.birthdate} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}}/>
        {errors.birthdate? <p style={{color:'red', position: 'relative', width:'260px', height:'50'}}>{errors.birthdate}</p>:<p style={{width:'200', height:'50px'}}></p>}
      </div>
      
      <div className={styles.formGroup}>
        <label style={{position:'relative', color:'#5260DB', width:'75px'}}>nDni</label>
        <input type="number" name="nDni" value={userForm.nDni} onChange={handleOnchange} style={{width:'250px',height:'30px',position:'relative'}}/>
        {errors.nDni? <p style={{color:'red', position: 'relative', width:'260px', height:'50'}}>{errors.nDni}</p>:<p style={{width:'200', height:'50px'}}></p>}
     </div>

        <button type="submit" className={styles.btn}>Register</button>
    </form>
    </div>

  </div>)
}

export default Register;