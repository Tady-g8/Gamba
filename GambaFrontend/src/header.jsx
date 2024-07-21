import './css/header.css'
import Hamburger from 'hamburger-react'
import Search from './search.jsx'
import HeaderLoginButton from './headerLoginButton.jsx'
import  rootBackgroundColorChanger from './js/rootBackgroundColorChanger.js'
import { useLayoutEffect } from 'react'

export default function Header() {

    rootBackgroundColorChanger();

    return (
        <header>
            <button className="h1" onClick={() => window.location.href = '/'}>Gamba</button>
            <div className=""></div>
            <div className="headerMoney">$ 0.00</div>
            <div className=""></div>
            <HeaderLoginButton />
        </header>
    )
}