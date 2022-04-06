import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { historyObject } from '../../../historyObject';
import { signupStart } from '../../../store/reducer/signup';
import { errorSignup, isSignupLoading, isSignupSuccess } from '../../../store/reducer/signup/selectors';
import BlackBox from '../../components/black-box';
import Button from '../../components/button';
import Input from '../../components/input';
import Theme from '../../layouts';
import "./index.scss"

/* istanbul ignore next */
const mapStateToProps = state => ({
    loading: isSignupLoading(state),
    success: isSignupSuccess(state),
    serverError: errorSignup(state)
});
/* istanbul ignore next */
const mapDispatchToProps = {
    signupStart
}

const SignupPage = (props) => {

    const { serverError = "", loading, signupStart, success } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("")
    const [username, setUsername] = useState("");
    const [error, setError] = useState({});

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleSetVerifyPassword = (pass) => {
        setVerifyPassword(pass)
    }

    const handleUser = (username) => {
        setUsername(username)
    }

    React.useEffect(() => {
        if (success) {
            historyObject.replace("/homepage")
        }
    }, [success])

    const handleSignup = useCallback(
        () => {
            let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let errorLocal = {}
            if(username.length === 0){
                errorLocal.username = "Username is required."
            }
            if (!regexEmail.test(email)) {
                errorLocal.email = "Email should be a valid email address"
            }
            if (!regexPassword.test(password)) {
                errorLocal.password = "Password should contain 8 characters, at least one uppercase, one lowercase and one number, and a special character between (@ $ ! % * ? &)"
            }
            if(verifyPassword !== password){
                errorLocal.verifyPassword = "Password and confirmation should be the same."
            }
            if (Object.keys(errorLocal).length > 0) {
                setError(errorLocal)
            } else {
                setError(errorLocal)
                signupStart({ email, password, username })
            }
        },
        [email, password, signupStart, verifyPassword, username],
    )

    React.useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            handleSignup()
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [handleSignup]);

    return <Theme>
        <BlackBox>
            <>
                <h1 className="form-title-signup">SIGNUP</h1>
                <Input name="username" type="text" placeholder="Username" onBlur={handleUser} error={error} />
                <Input name="email" type="email" placeholder="E-Mail Address" onBlur={handleEmail} error={error} />
                <Input name="password" type="password" placeholder="Password" onBlur={handlePassword} error={error} />
                <Input name="verifyPassword" type="password" placeholder="Confirm Password" onBlur={handleSetVerifyPassword} error={error} />
                <div style={{ height: "2rem" }} />
                {serverError.length > 0 && <div className='error-box-form'>
                    <span>{serverError}</span>
                </div>
                }
                <Button onClick={handleSignup} text={"SIGNUP"} loading={false} />
                <p className='info-text'>Don't have an account yet? <span className='link' onClick={() => historyObject.replace("/login")}>Login</span></p>
            </>
        </BlackBox>
    </Theme>
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);