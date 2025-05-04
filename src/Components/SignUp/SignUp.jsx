import React  from 'react';
import './SignUp.css'
import { IoMail } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';
import { MdPermIdentity } from 'react-icons/md';
import { Link } from 'react-router';

const SignUp = (requirments) => {

    const {handleRegister, handleSignUp} = requirments.requirments;
    console.log(requirments.requirments);
    return (
        <div className='SignUp-section'>

            <div className="form-section">
                    <form onSubmit={handleSignUp} className='signUp-form'>
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
                    <p className='forward-to-signin'>Already have an account? <Link onClick={() => handleRegister(false)} className='signin-link'>Sign In</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;