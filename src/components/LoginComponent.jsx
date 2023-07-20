import "../sass/LoginComponent.scss";
import { LoginAPI } from "../api/AuthAPI";

function LoginComponent() {
    const login = () => {
        LoginAPI();
    };
    return (
        <div>
            <h1>LoginComponent</h1>
            <button onClick={login} className='login-btn'>
                Login to Linked
            </button>
        </div>
    );
}

export default LoginComponent;
