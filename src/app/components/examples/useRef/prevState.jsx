import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev Count: {prevState.current}</p>
            <p>Current Count: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle Other State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
