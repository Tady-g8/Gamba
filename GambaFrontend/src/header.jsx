import './css/header.css'
import Hamburger from 'hamburger-react'
import Search from './search.jsx'
import LogoutButton from './logoutButton.jsx'
import HeaderLoginButton from './headerLoginButton.jsx'
import  rootBackgroundColorChanger from './js/rootBackgroundColorChanger.js'
import { useLayoutEffect } from 'react'

export default function Header() {

    updateMoney();

    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!sessionStorage.getItem('user') || getMoney() == 0) {
        rootBackgroundColorChanger(Math.floor(Math.random() * 9000000000) + 555555555);
    } else {
        rootBackgroundColorChanger(getMoney());
    }

    

    return (
        <header>
            <button className="h1" onClick={() => window.location.href = '/'}>Gamba</button>
            <div className=""></div>
            <div className="headerMoney">$ {getMoney()}</div>
            <div className=""></div>
            {user ? <LogoutButton /> : <HeaderLoginButton />}
        </header>
    )
}

function getMoney(){
    if(!sessionStorage.getItem('user')) {
        return 0;
    } else {
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user);
        return user.money;
    }   
}

function updateMoney(){
    if(!sessionStorage.getItem('user')) {
        return 0;
    } else {
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log("Updating: " + user.id);
        fetch(`http://localhost:3000/api/auth/user?id=${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(data => {
            sessionStorage.setItem('user', JSON.stringify(data));
            console.log(data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }  
}