import { getAuth } from "firebase/auth";
import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from "../../firebase.init";

const auth = getAuth(app)

const Login = () => {
   const [signInWithGoogle] = useSignInWithGoogle(auth)
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{margin:'20px', color:'blue'}}>
      <button style={{margin:'2px', color:'white',backgroundColor:'green', padding:'10px', fontWeight:'700', borderRadius:'10px'}} onClick={   () => signInWithGoogle()}>Google Sign In</button>
      </div>
      
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input style={{margin:'5px', color:'white',backgroundColor:'green', padding:'10px', fontWeight:'700', borderRadius:'10px'}} type="submit" value="Login" />
      </form>   
    </div>
  );
};

export default Login;
