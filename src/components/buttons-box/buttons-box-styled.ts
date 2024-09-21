import styled from'styled-components';
import {ButtonsBoxProps} from "../../types/types";

const ButtonsBoxStyled = styled.div<ButtonsBoxProps>`
    display: flex;
    gap: 8px;
    margin-bottom: ${props => props.marginbot};
    
    button {
        font-family: 'Montserrat' , sans-serif;
        font-size: 14px;
        font-weight: 700;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 29.5px;
    }
`

export default ButtonsBoxStyled;
