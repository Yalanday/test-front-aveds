import styled from "styled-components";

const MainIndexPage = styled.main`

    .main__container {
        padding: 97px 197px;
    }

    .main__title {
        margin: 0 0 35px;
        font-size: 58px;
        line-height: 80px;
        letter-spacing: 0.2px;
        font-weight: 700;
        color: #252b42;
        max-width: 750px;
    }

    @media (max-width: 1084px) {
        .main__container {
            padding: 30px 140px;
        }

        .main__title {
            font-size: 40px;
            line-height: 60px;
        }
    }

    @media (max-width: 898px) {
        .main__title {
            font-size: 36px;
            line-height: 60px;
        }
    }

    @media (max-width: 768px) {
        .main__container {
            padding: 56.5px 10px;
        }

        .main__title {
            margin: 0 0 45px;
            font-size: 28px;
            line-height: 39px;
            max-width: 370px;
        }
    }
`

export default MainIndexPage;
