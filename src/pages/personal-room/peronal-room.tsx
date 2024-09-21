import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
//components
import ButtonsBox from "../../components/buttons-box/buttons-box";
import ButtonApp from "../../ui/button/button";
//style
import PersonalRoomStyled from "./personal-room-styled";
//types
import {PropsPersonalRoom} from "../../types/types";

const PersonalRoom: React.FC<PropsPersonalRoom> = ({isAuthenticated, handleAuth}) => {
    const navigate = useNavigate();
    const currentUser = useAppSelector((state) => state.users.currentUser);

    const handleButtonClick = () => {
        navigate('/');
        handleAuth();
    }

    return (
        <>
            <PersonalRoomStyled>
                <div className="main__container">
                    <h1 className="main__title">Привет, {currentUser?.username}</h1>
                    <ButtonsBox>
                        <ButtonApp
                            onClick={handleButtonClick}
                            bgcolor={"#FF685B"}
                            color={"#ffffff"}
                            padding={"15px 40px"}
                            children={"Выйти из аккаунта"}/>
                        <ButtonApp className={"main__button"}
                            onClick={() => navigate('/contacts')}
                            bgcolor={"#ffffff"}
                            color={"#FF685B"}
                            padding={"15px 40px"}
                            children={"Перейти в контакты"}/>
                    </ButtonsBox>
                </div>
            </PersonalRoomStyled>
        </>
    )
}

export default PersonalRoom;
