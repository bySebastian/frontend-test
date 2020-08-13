import React from "react";

const Button = (props) => {
    const {type, label, action} = props;
    return (
        <button type={type} onClick={() => action}>{label}</button>
    );
};

export default Button;