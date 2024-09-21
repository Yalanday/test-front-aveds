import React from 'react';
//styles
import ButtonStyled from "./button-styled";
//types
import {ButtonProps} from "../../types/types";

const ButtonApp: React.FC<ButtonProps> = ({
                                           children,
                                           className,
                                           bgcolor,
                                           padding,
                                           color,
                                           onClick,
                                       }) => {
    return (
        <ButtonStyled
            onClick={onClick}
            className={className}
            bgcolor={bgcolor}
            padding={padding}
            color={color}
        >
            <span>{children}</span>
        </ButtonStyled>
    )
};

export default ButtonApp;
