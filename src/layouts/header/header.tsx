import React from 'react';
import {Link} from "react-router-dom";
//components
import ButtonApp from "../../ui/button/button";
import Logo from "../../components/logo/logo";
//styles
import HeaderStyled from "./header-styled";
//types
import {HeaderProps} from "../../types/types";


const Header: React.FC<HeaderProps> = ({isAuthenticated, showModal, handleAuth}) => {

    const handleButtonClick= () => {
        if(!isAuthenticated) showModal();
        if(isAuthenticated) handleAuth();
    };

    return (
        <HeaderStyled className={"header"}>
            <div className="header__container">
                <Link className="header__logo-link" to="/">
                    <Logo/>
                </Link>
                <div className='header__right-container'>
                    <nav className="header__nav">
                        <Link to="/contacts">Контакты</Link>
                    </nav>
                    <ButtonApp
                        onClick={handleButtonClick}
                        className="header__button"
                        bgcolor="#ffffff"
                        padding="8px 60px"
                        color="#FF685B"
                        children={isAuthenticated ? "Выйти" : "Войти"}/>
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;
