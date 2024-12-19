const ValidateLogin = (input)=>
{
     const errors = {};

     if(!input.usarName){
       errors.usarName = "userName is required";
     }else if(input.usarName.length <3){
        errors.usarName = "Is necesary at least 4 characters";
     }

     if(!input.password){
        errors.password = "password is required";
     }else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(input.password)){//uso de regex
      errors.password = "Is necesary at least 6 characters";
     }
     return errors;

}

export default ValidateLogin;