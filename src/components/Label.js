import React from "react";

const Label = (props) => {
    const { id, label } = props;
    return (
        <label htmlFor={id}>{label}</label>
    );
};

export default Label;