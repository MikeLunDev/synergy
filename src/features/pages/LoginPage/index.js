import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { historyObject } from '../../../historyObject';
import { loginStart } from '../../../store/reducer/login';
import { errorLogin, isLoginLoading, isLoginSuccess } from '../../../store/reducer/login/selectors';
import BlackBox from '../../components/black-box';
import Button from '../../components/button';
import Input from '../../components/input';
import Theme from '../../layouts';
import "./index.scss"

/* istanbul ignore next */
const mapStateToProps = state => ({
    loading: isLoginLoading(state),
    success: isLoginSuccess(state),
    serverError: errorLogin(state)
});
/* istanbul ignore next */
const mapDispatchToProps = {
    loginStart
}

export const LoginPage = (props) => {

    const { serverError, loading, loginStart, success } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleLogin = useCallback(
        () => {
            let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            let errorLocal = {}
            if (!regexEmail.test(email)) {
                errorLocal.email = "Email should be a valid email address."
            }
            if(password.length === 0){
                errorLocal.password = "Password is required."
            }
            if (Object.keys(errorLocal).length > 0) {
                setError(errorLocal)
            } else {
                setError(errorLocal)
                loginStart({ email, password })
            }
        },
        [email, password, loginStart],
    )

    React.useEffect(() => {

        if (success) {
            historyObject.replace("/homepage")
        }
    }, [success])

    /* istanbul ignore next */
    React.useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                handleLogin()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [handleLogin]);

    return <Theme>
        <BlackBox>
            <>
                <h1 className="form-title-login">LOGIN</h1>
                <Input name="email" type="email" placeholder="E-Mail Address" onBlur={handleEmail} error={error} />
                <Input name="password" type="password" placeholder="Password" onBlur={handlePassword} error={error}/>
                <div style={{ height: "2rem" }} />
                {serverError.length > 0 && <div className='error-box-form'>
                    <span>{serverError}</span>
                </div>
                }
                <Button onClick={handleLogin} text={"LOGIN"} loading={loading} />
                <p className='info-text'>Don't have an account yet? <a href="/signup" className='link'>Signup</a></p>
                <p className='info-text'>Don't remember your password? <a href="/homepage" className='link'>Recover my Password</a></p>
            </>
        </BlackBox>
    </Theme>
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);