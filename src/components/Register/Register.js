import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register now</h3>
      <form>
        <input type="text" placeholder="Your name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password"/>
        <br />
        <input style={{margin:'20px', color:'white',backgroundColor:'green', padding:'10px', fontWeight:'700', borderRadius:'10px'}} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
