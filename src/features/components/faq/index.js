import React from 'react';
import faqImg from "../../../assets/question.svg";
import "./index.scss"

const FaqComponent = () => {
    return <div className='faq-container'>
        <img src={faqImg} alt="faq" className='faq-img' />
    </div>;
}

export default FaqComponent;