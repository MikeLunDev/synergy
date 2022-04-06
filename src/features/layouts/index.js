import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import logo from "../../assets/logo-horizontal.png"
import { historyObject } from "../../historyObject";
import FaqComponent from "../components/faq";

export const Theme = (props) => {
    const { children } = props;

    return <div className={`synergy-layout`}>
        <header>
            <img src={logo} alt={"logo"} className={"logo"} onClick={() => historyObject.push("/homepage")} />
        </header>
        <div className="container">
            {children}
        </div>
        <FaqComponent />
    </div>
}

Theme.propTypes = {
    children: PropTypes.element.isRequired
}

export default Theme
