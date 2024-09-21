import React from 'react';
import {useNavigate} from "react-router-dom";
//components
import ButtonsBox from "../../components/buttons-box/buttons-box";
import ButtonApp from "../../ui/button/button";
import Cards from "../../components/cards/cards";
//styles
import MainIndexPage from "./index-page-styled";
//types
import {IndexPageProps} from "../../types/types";


const IndexPage: React.FC<IndexPageProps> = ({isAuthenticated, showModal}) => {
    const navigate = useNavigate();

    const buttonClickHandler = () => {
        if (isAuthenticated) navigate("/personal-room/")
        if (!isAuthenticated) showModal();
    };

    return (
        <>
            <MainIndexPage>
                <div className="main__container">
                    <h1 className="main__title">Место для получения медицинской помощи</h1>
                    <ButtonsBox marginbot={"96px"}>

                        <ButtonApp
                            onClick={buttonClickHandler}
                            bgcolor={"#FF685B"}
                            color={"#ffffff"}
                            padding={"15px 39px"}
                            children={isAuthenticated ? "Личный кабинет" : "Войти"}/>

                        <ButtonApp
                            onClick={() => {
                                navigate("/contacts/")
                            }}
                            bgcolor={"#ffffff"}
                            color={"#FF685B"}
                            padding={"15px 40px"}
                            children={"Контакты"}/>
                    </ButtonsBox>

                    <Cards/>
                </div>
            </MainIndexPage>

        </>
    );
}

export default IndexPage;
