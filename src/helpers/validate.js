const Validate = (input)=>{
    const errors = {};//existencia
    if(!input.userName){
         errors.userName = "userName is required";
    }else if(input.userName.length < 3){
        errors.userName = "Is necesary at least 3 characters";
    }

    if(!input.password){
        errors.password = "password is required";
    }else if(input.password.length < 5){
       errors.password = "Is necesary at least 6 characters"
    }

    if(!input.name){
        errors.name = "name is required";
    }else if(input.name.length < 4){
     errors.name = "Is necesary at least 5 character";
    }

    if(!input.email){
        errors.email = "email is required";
    }else   if(input.email.length < 5){
       errors.email = "Is necesary at leat 5 characters";
    }

     if(!input.birthdate){
        errors.birthdate = "birthdate is required";
     };
     if(!input.nDni){
        errors.nDni = "nDni is required";
     };



    return errors;
}

export default Validate;