import styled from "styled-components";

const HeaderStyled = styled.header`
    border-bottom: 1px solid #000000;

    .header__container {
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 71px 19px;
        box-sizing: border-box;
        margin: 0 auto;
    }

    .header__logo-link {
        margin-top: 3px;
    }

    .header__right-container {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .header__nav {
        display: flex;
        align-items: center;
        gap: 49px;
    }

    .header__nav a {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 15px;
        color: #737373;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #000000;
        }
    }

    .header__button {
        font-size: 20px;
        padding: 6px 58px;
        font-family: 'Montserrat', sans-serif;
    }

    @media (max-width: 768px) {

        .header__container {
            padding: 22px 10px 21px;
        }

        .header__right-container {
            gap: 11px;
        }

        .header__nav {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .header__button {
            padding: 4px 18.5px;
        }

        .header__logo-link {
            margin-top: 5px;
        }
    }




`;

export default HeaderStyled;
