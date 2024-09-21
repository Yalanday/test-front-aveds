import styled from "styled-components";
import {ButtonProps} from "../../types/types";

const ButtonStyled = styled.button<ButtonProps>`
    background-color: ${(props) => props.bgcolor};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    border: 2px solid rgba(255, 104, 91, 1);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        opacity: 0.7;
    }
`;

export default ButtonStyled;
