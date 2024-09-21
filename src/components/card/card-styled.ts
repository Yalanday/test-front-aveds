import styled from'styled-components';

type CardStyled = {
    order: number;
}

const CardsStyled = styled.div<CardStyled>`
    padding: 35px 40px;
    -webkit-box-shadow: 0 13px 19px 0px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0 13px 19px 0px rgba(0, 0, 0, 0.7);
    box-shadow: 0 13px 19px 0px rgba(0, 0, 0, 0.07);
    max-width: 328px;
    width: 100%;


    @media (max-width: 1078px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        min-width: 250px;
        max-width: 100%;
    }


    .card__icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E74040;
        margin-bottom: 20px;
    }

    img {
        display: block;
        width: 32px;
        height: 40px;
        border-radius: 50%;
    }

    .card__title {
        margin: 0 0 20px;
        letter-spacing: 0.1px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #252B42;


        &:after {
            content: '';
            display: block;
            width: 50px;
            height: 2px;
            background-color: #E74040;
            margin-top: 20px;
        }
    }

    .card__description {
        margin: 0;
        letter-spacing: 0.2px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #707070;
    }

    @media (max-width: 768px) {
        order: ${props => props.order};

        .card__icon {
            margin-bottom: 21px;
        }

        .card__title::after {
            margin-top: 19px;
        }
        

    }

`

export default CardsStyled;
