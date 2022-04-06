import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from "prop-types"
import emailImg from "../../../assets/mail.svg"
import lockImg from "../../../assets/lock.svg"
import userImg from "../../../assets/user.svg"
import eyeImg from "../../../assets/eye.svg"
import "./index.scss"

const Input = (props) => {
    const { type, onBlur, placeholder, name, error } = props;
    const [text, setText] = useState("")
    const [inputType, setInputType] = useState(type)
    const imageUrl = useMemo(() => {
        switch (name) {
            case "email":
                return emailImg
            case "verifyPassword":
            case "password":
                return lockImg
            case "user":
                return lockImg
            default:
                return userImg
        }
    }, [name])

    const hasError = useMemo(() => {
        return !!error && !!error[name]
    }, [error, name])

    const handleShowPassword = useCallback(
        () => {
            const newType = inputType === "password" ? "text" : "password"
            setInputType(newType)
        },
        [inputType],
    )

    return <label className='label-input'>
        <div className='input-wrapper'>
            <img src={imageUrl} alt={name} className='img' />
            <input autoComplete="on"
                type={inputType}
                name={name}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={() => onBlur(text)}
                placeholder={placeholder}
                className={`synergy-input ${hasError ? "error" : ""}`}
            />
            {(name === "password" || name === "verifyPassword") && <img src={eyeImg} alt={name} className={`eye-password ${inputType}`} onClick={handleShowPassword} />}
        </div>
        {hasError && <span className='error-text'>{error[name]}</span>}
    </label>
}

Input.propTypes = {
    type: PropTypes.oneOf(['email', 'password', 'text']).isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.object
}

export default Input;