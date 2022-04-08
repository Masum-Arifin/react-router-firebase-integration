import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const {sinInWithGoogle} = useFirebase(); 
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{margin:'20px', color:'blue'}}>
      <button style={{margin:'2px', color:'white',backgroundColor:'green', padding:'10px', fontWeight:'700', borderRadius:'10px'}} onClick={sinInWithGoogle}>Google Sign In</button>
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
