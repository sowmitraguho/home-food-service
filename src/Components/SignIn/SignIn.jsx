import React from 'react';
import './Signin.css'
import { Link } from 'react-router';
const SignIn = (requirments) => {

    const { handleRegister,  handleSignIn} = requirments.requirments;
    //console.log(requirments.requirments);
    return (
        <div className='signin-section'>
            <h2>Please SignIn</h2>
            <div className="form-section">
                <form onSubmit={handleSignIn} className='signIn-form'>
                    
                    <h3>Email</h3>
                    <input type='email' name='email' placeholder='Your email'/>
                    <h3>Password</h3>
                    <input type='password' name='password' placeholder='Your password'/>
                    <button className='signIn-btn' type='submit'>Sign In</button>
                    <p>Not SignUp yet? <Link onClick={()=> handleRegister(true)}>SignUp</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;