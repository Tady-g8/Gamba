import './css/login.css'

export default function Login() {
    return (
        <div className="loginWrap">
            <div className="loginLeft">
            <h1>Welcome back!</h1>

            <form>
                <label htmlFor="">Email or Username</label>
                <br />
                <input type="text" placeholder="John Doe" 
                className="loginInput"/>
                <br />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" placeholder="Password" className="loginInput"/>
                <br />
                <button type="submit">Login</button>
            </form>
            <p className='dontHaveAccount'>Don't have an account yet? <a href="/register">Register</a></p>
            </div>

            <div className="loginRight">

            </div>
            

        </div>
    )
}