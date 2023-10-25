import React, {useState} from "react";
import axios from "axios";


const Login = ({setToken}) => {
   const [user, setUser] = useState({
    email: "", password: ""
   })


   const {email, password} = user;

   function handleInput(e){
         setUser({...user, [e.target.name]: e.target.value})
   }

   function handleSubmit(e){
       e.preventDefault();
       // validations: 
       if(  !email || !password ){
           alert("All fields are required");
        }
        else{

           axios.post("https://instagram-express-app.vercel.app/api/auth/login/" , {email,password})
           .then( response => {
                console.log(response.data);
                setToken(response.data.data.token);
                // add token to local storage
               localStorage.setItem("token", response.data.data.token);
           })

           .catch( err=> console.log(err.response.data.message))

        }
    }


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                 
                 <input type="text"  placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="password"  placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default  Login;