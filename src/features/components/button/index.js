import React from 'react';
import "./index.scss"

const Button = (props, ref) => {
    const { text, onClick } = props;
    return <button className='btn' onClick={onClick}>
        <span className='btn-text'>
            {text}
        </span>
    </button>
}


export default Button;