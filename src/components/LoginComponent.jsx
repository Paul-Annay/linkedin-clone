import "../sass/LoginComponent.scss";
import { LoginAPI, RegisterAPI } from "../api/AuthAPI";
import { useState } from "react";

function LoginComponent() {
    const [credentials, setCredentials] = useState({});

    const login = async () => {
        const res = await LoginAPI(credentials.email, credentials.password);
        console.log(res.user);
    };

    const register = () => {
        const res = RegisterAPI(credentials.email, credentials.password);
        console.log(res);
    };

    return (
        <div>
            <h1>LoginComponent</h1>
            <input
                onChange={(event) =>
                    setCredentials({
                        ...credentials,
                        email: event.target.value,
                    })
                }
                type='email'
                className='common-input'
                placeholder='enter your email'
            />
            <input
                onChange={(event) =>
                    setCredentials({
                        ...credentials,
                        password: event.target.value,
                    })
                }
                type='password'
                className='common-input'
                placeholder='*****'
            />
            <button onClick={login} className='login-btn'>
                Login to Linked
            </button>

            <button onClick={register} className='register-btn'>
                Register to Linked
            </button>
        </div>
    );
}

export default LoginComponent;
