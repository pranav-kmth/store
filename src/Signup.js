import React,{useState} from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import { auth } from './firebase';


function Signup(props) {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth)
    }

    return (
        <div className="signup">
            <Link to="/">
                <img
                    className="signup_img"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />            
            
            </Link>

            <div className="signup_container">
                <h1>Sign In</h1>
                <form>
                    <h4>Email</h4>
                    <input type='text' value={email} onChange = {e => setEmail(e.target.value)}/>

                    <h4>Password</h4>
                    <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}>Sign In</button>

                </form>
                
            </div>            
        </div>
    )
}

export default Signup
