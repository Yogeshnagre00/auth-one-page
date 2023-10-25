import React,{useEffect, useState} from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";


import "./style.css";


const App = () => {
    const [token, setToken] = useState("");

    
    return(
        <div>
            <Signup setToken={setToken}/>
            <Login setToken={setToken}/>
            <Dashboard token={token}/>
        </div>
    )
}

export default App;