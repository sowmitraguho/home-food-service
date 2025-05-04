import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

const ContactUs = () => {

    const [ registered, setRegistered] = useState(false);
    
        const handleRegister = (value) => {
            setRegistered(value);
        }
    
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

        const requirments = { handleRegister, handleSignUp, handleSignIn};
    return (
        <div>
            {
                registered ? <SignUp requirments={requirments}></SignUp> : <SignIn requirments={requirments}></SignIn>
            }
            
            
        </div>
    );
};

export default ContactUs;