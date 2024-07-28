import './css/logoutButton.css'

export default function LogoutButton() {
    return (
        <button className="logout" onClick={() => {
            sessionStorage.removeItem('user');
            window.location.href = '/';
        }}>Logout</button>
    )
}