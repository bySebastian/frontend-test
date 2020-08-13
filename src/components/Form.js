import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Form = () => {

    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = () => {
        console.log("run tests");
    };

    return (
        <Form>
            <Label id="url" label="Page URL" />
            <Input id="url" value={url} onChange={handleChange} />
            <Button type="button" label="Run tests" action={handleSubmit} />
        </Form>
    );
};

export default Form;