import styled from "styled-components";

const MainContactsPage = styled.main`

    .main__container {
        padding: 184.5px 197px;
    }
    
    .main__title {
        margin: 0;
        font-size: 58px;
        line-height: 80px;
        letter-spacing: 0.2px;
        font-weight: 700;
        color: #252b42;
        max-width: 750px;
    }
    
    
    @media (max-width: 768px) {
        .main__container {
            padding: 56.5px 10px;
        }
        
        .main__title {
            font-size: 28px;
            line-height: 39px;
            max-width: 500px;
    }
`

export default MainContactsPage;
