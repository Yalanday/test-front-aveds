import React from 'react';
//styles
import ButtonsBoxStyled from "./buttons-box-styled";
//types
import {ButtonsBoxProps} from "../../types/types";

const ButtonsBox: React.FC<ButtonsBoxProps> = ({children, marginbot}) => {
    return (
        <ButtonsBoxStyled marginbot={marginbot}>
            {children}
        </ButtonsBoxStyled>
    );
}

export default ButtonsBox;
