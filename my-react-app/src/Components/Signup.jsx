import React from 'react'
import './Signup.css';
import Back from './BACK.png';

function Login() {
  return (
   <div className="signup">
    <form className='form'>
        <h2>SignUp</h2>
        <input type="text"   className="box" placeholder='Enter UserName' required/>
        <input type="email"   className="box" placeholder='Enter Email' required /> 
        <input type="password"   className="box" placeholder='********' required   maxLength={8} /> 
        <label id='chk' htmlFor="check">Remember Me <input type="checkbox" name="check" /></label>
        <button type="submit" id='sign' >Sign Up</button>
    </form>
    <img src={Back} alt=""/>
   </div>
  );
}

export default Login