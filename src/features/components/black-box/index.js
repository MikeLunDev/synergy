import React from "react";
import "./index.scss";
import PropTypes from "prop-types";


export const BlackBox = (props) => {
    const { children, ...other } = props;

    return <div className={`black-box`} {...other}>
        {children}
    </div>
}
export default BlackBox;

BlackBox.propTypes = {
    children: PropTypes.element.isRequired,
}