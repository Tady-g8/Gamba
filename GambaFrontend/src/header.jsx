import './css/header.css'
import Hamburger from 'hamburger-react'
import Search from './search.jsx'
import HeaderLoginButton from './headerLoginButton.jsx'

export default function Header() {
    return (
        <header>
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    // open a menu
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