import styled from'styled-components';

const CardsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 0 14px;
    }
`

export default CardsStyled;
