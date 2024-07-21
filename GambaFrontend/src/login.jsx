import './css/login.css'
import React, { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email === 'tadyg8' && formData.password === '123') {
            let msg = 'Welcome' + ' ' + formData.email;
            cardMover(msg);
        } else {
            cardMover('Wrong email or password');
        }
    }
    return (
        <div className="loginWrap">
            <div className="loginLeft">
            <h1>Welcome back!</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email or Username</label>
                <br />
                <input className='loginInput' placeholder='John Doe' type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input className='loginInput' placeholder='********' type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                <br />
                <button type="submit">Login</button>
            </form>
            <p className='dontHaveAccount'>Don't have an account yet? <a href="/register">Register</a> <br /> <br />
            Forgot password? <a href="/forgot">Password Reset</a></p>
            </div>

            <div className="loginRight">
                <div className="playingCard">
                    <div className="innerCard">
                        <div className="formMsg"></div>
                    </div>
                </div>
                <div className="playingCard2">
                    <div className="innerCard2">
                        
                    </div>
                </div>
            </div>

            

        </div>
    )
}

function cardMover(msg) {
    const formMsg = document.querySelector('.formMsg');
    const card = document.querySelector('.playingCard2');

    formMsg.innerHTML = msg;

    card.style.transform = "translateX(400px) rotate(45deg) translateY(50px)";
    setTimeout(() => {
        card.style.zIndex = "0";
    }, 200);

    setTimeout(() => { 
        card.style.transform = "translateX(0px) rotate(17deg) "; 
    }, 400);

    setTimeout(() => {
        card.style.transform = "translateX(400px) rotate(45deg) translateY(50px)";
        setTimeout(() => {
            card.style.zIndex = "2";
        }, 200);
        
        
        // After another 0.3 seconds, move the card back to the original position again
        setTimeout(() => { 
            card.style.transform = "translateX(0px) rotate(17deg)"; 
        }, 300);
    }, 3500); 
}
