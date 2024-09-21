import React from 'react';
import {useNavigate} from "react-router-dom";
//components
import ButtonApp from "../../ui/button/button";
//styles
import Page404Styled from "./page404-styled";

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <Page404Styled>
            <h1>Not Found 404</h1>
            <ButtonApp
                onClick={() => navigate("/")}
                bgcolor="#ffffff"
                padding="8px 60px"
                color="#FF685B"
                children={"На главную страницу"}/>
        </Page404Styled>
    );
}

export default Page404;
