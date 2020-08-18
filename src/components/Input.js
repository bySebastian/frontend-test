import React from "react";

const Input = (props) => {
    const {id, value} = props;
    return (
        <input id={id} type="input" name="q" value={value} aria-label={id} />
    );
};

export default Input;