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
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    
                } else {
                    // close a menu
                }
            }} />
            <h1>Gamba</h1>
            <div className="headerMoney">$ 0.00</div>
            <Search />
            <HeaderLoginButton />
        </header>
    )
}