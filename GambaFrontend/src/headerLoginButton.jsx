import './css/headerLoginButton.css'

export default function HeaderLoginButton() {
    return (
        <button className="login" onClick={() => window.location.href = '/login'}>Login</button>
    )
}