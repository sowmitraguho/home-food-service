import React, { useState } from 'react';
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';
import { IoMail } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';
import { MdPermIdentity } from 'react-icons/md';
import { Link } from 'react-router';

const SignUp = () => {

    const [loggedIn, setLoggedIn] = useState(false);


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        console.log('form submitted successfully!', email, pass);

        createUserWithEmailAndPassword(auth, email, pass)
            .then(registeredUser => {
                const user = registeredUser.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
                // ..
            });
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        
        console.log('form submitted successfully!', email, pass)
    }
    return (
        <div className='SignUp-section'>

            <div className="form-section">
                {
                    (!loggedIn) &&  <form onSubmit={handleSignUp} className='signUp-form'>
                    <h2>SignUp</h2>
                    <div className="input-box">
                        <span>
                            <MdPermIdentity className='icon'/>
                        </span>
                        <label>Name</label>
                        <input type='text' name='name'  />
                    </div>
                    <div className="input-box">
                        <span>
                            <IoMail className='icon'/>
                        </span>
                        <label>Email</label>
                        <input type='email' name='email'  />

                    </div>
                    <div className="input-box">
                        <span>
                            <FaLock className='icon'/>
                        </span>
                        <label>Password</label>
                        <input type='password' name='password'  />
                    </div>
                    <button className='signUn-btn' type='submit'>SignUp Now</button>
                    <p className='forward-to-signin'>Already have an account? <Link onClick={() => setLoggedIn(true)} className='signin-link'>Sign In</Link> </p>
                </form>
                }
            
                {
                    loggedIn && <form onSubmit={handleSignIn} className='signUp-form'>
                     <h2>SignIn</h2>
                     <div className="input-box">
                        <span>
                            <IoMail className='icon'/>
                        </span>
                        <label>Email</label>
                        <input type='email' name='email'  />

                    </div>
                    <div className="input-box">
                        <span>
                            <FaLock className='icon'/>
                        </span>
                        <label>Password</label>
                        <input type='password' name='password'  />
                    </div>
                    <button className='signUn-btn' type='submit'>Sign In</button>
                    <p className='forward-to-signin'>Not SignUp yet? <Link className='signin-link' onClick={() => setLoggedIn(false)} >SignUp</Link> </p>
                </form>
                }
            </div>
        </div>
    );
};

export default SignUp;