import React from "react";
import CardWrapper from "../../common/Card";

const withFunction = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log(isAuth);
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log(isAuth);
    };
    const isAuth = !!localStorage.getItem("auth");

    return (
        <CardWrapper>
            {" "}
            {
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            }
        </CardWrapper>
    );
};

export default withFunction;
