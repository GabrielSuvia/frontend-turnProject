import { useState } from "react";
import axios from "axios";
import Validate from "../helpers/validate.js";
import { useNavigate} from "react-router-dom";
import styles from "./Register.module.css";

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

       axios.post("https://my-four-app-production.up.railway.app/user/register", userForm)
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
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}}>username</label>
        <input type="text" name="userName" value={userForm.userName} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}} />
      {errors.userName && <p style={{color:'red',position: 'absolute', right:'0px'}}>{errors.userName}</p>}
      </div>

      <div className={styles.formGroup}>
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}}>password</label>
        <input type="password" name="password" value={userForm.password} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}}/>
        {errors.password && <p style={{color:'red',position: 'absolute', right:'0px'}}>{errors.password}</p>}
     </div>

     <div className={styles.formGroup}>
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}}>name</label>
        <input type="text" name="name" value={userForm.name} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}}/>
        {errors.name && <p style={{color:'red', position: 'absolute', right:'0px'}}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}} >email</label>
        <input type="email" name="email" value={userForm.email} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}}/>
        {errors.email && <p style={{color:'red', position: 'absolute', right:'0px'}}>{errors.email}</p>}
      </div> 
      
      <div className={styles.formGroup}>
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}}>birthdate</label>
        <input type="text" name="birthdate" value={userForm.birthdate} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}}/>
        {errors.birthdate && <p style={{color:'red', position: 'absolute', right:'0px'}}>{errors.birthdate}</p>}
      </div>
      
      
      <div className={styles.formGroup}>
        <label style={{position:'relative', left:'-350px', color:'#5260DB'}}>nDni</label>
        <input type="number" name="nDni" value={userForm.nDni} onChange={handleOnchange} style={{width:'400px',height:'30px',position:'absolute',left:'150px'}}/>
        {errors.nDni && <p style={{color:'red', position: 'absolute', right:'0px'}}>{errors.nDni}</p>}
     </div>
   

        <button type="submit" className={styles.btn}>Register</button>
    </form>
    </div>

  </div>)
}

export default Register;