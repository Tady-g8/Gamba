import './css/login.css'
import React, { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
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
        const username = formData.username;
        const password = formData.password;

        fetch('http://localhost:3000/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            // Handle success response
            if (data.token) {
                let msg = 'Welcome ' + formData.username;
                sessionStorage.setItem('user', JSON.stringify(data));
                cardMover(msg);
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            } else {
                cardMover('Invalid credentials');
            }
        }).catch(error => {
            console.error('Error:', error);
            cardMover('Error occurred');
        });
    }
    return (
        <div className="loginWrap">
            <div className="loginLeft">
            <h1>Welcome back!</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br />
                <input className='loginInput' placeholder='John Doe' type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
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
                    <svg
                        className="spades"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        style={{ enableBackground: "new 0 0 128 128" }} // JSX-compatible style
                        xmlSpace="preserve"
                    >
                        <path
                             // JSX-compatible style
                            d="M116.651 72.465c-.527 16.279-13.302 29.023-29.116 29.023a29.342 29.342 0 0 1-14.698-3.969 27.493 27.493 0 0 1-4.124-2.915c.682 10.45 3.38 24.465 12.155 33.395H47.132c8.775-8.961 11.504-22.977 12.186-33.426a27.964 27.964 0 0 1-4.155 2.946 29.34 29.34 0 0 1-14.698 3.969c-15.783 0-28.589-12.744-29.116-29.023-.279-8.155 2.326-16.434 7.752-24.62C23.38 41.426 64 0 64 0s40.62 41.426 44.899 47.845c5.426 8.186 8.031 16.465 7.752 24.62z"
                        />
                    </svg>
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
