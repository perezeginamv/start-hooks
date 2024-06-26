import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const field = <TextField label="email" name="email" />;
const handleChange = (target) => {
    console.log("target", target);
};
const CloneElementExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned Email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
