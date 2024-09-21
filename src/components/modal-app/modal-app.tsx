import React, {useEffect, useState} from 'react';
import { PropsModal} from "../../types/types";
import FormRegistration from "../forms/form-registration";
import FormAuthentication from "../forms/form-authentication";
import ButtonsBox from "../buttons-box/buttons-box";
import ButtonApp from "../../ui/button/button";
import ModalStyled from "./modal-styled";

const ModalApp: React.FC<PropsModal> = ({
                                            isModalOpen,
                                            handleOk,
                                            handleCancel,
                                            handleAuth
                                        }) => {
    const [reg, setReg] = useState<boolean | null>(null);
    const [auth, setAuth] = useState<boolean | null>(null);
    const toggleReg = () => {
        setReg(true);
        setAuth(false)
    }

    const toggleAuth = () => {
        setAuth(true);
        setReg(false)
    }

    const setTitle = () => {
        if (reg === true) {
            return `Регистрация`
        }
        if (auth === true) {
            return `Вход`
        }
    }

    const onClose = () => {
        handleCancel();
    }

    useEffect(() => {
        return () => {
            setReg(null);
            setAuth(null);
        }
    }, [isModalOpen])



    return (
        <ModalStyled footer={false} title={setTitle()} open={isModalOpen}
               onOk={handleOk} onCancel={onClose}>

            {reg === null && <ButtonsBox marginbot={'20px'}>
              <ButtonApp className={"button-reg"}
                  onClick={toggleAuth}
                  bgcolor={"#FF685B"}
                  color={"#ffffff"}
                  padding={"15px 40px"}
                  children={"Вход"}/>


              <ButtonApp
                  className={"button-auth"}
                  onClick={toggleReg}
                  bgcolor={"#ffffff"}
                  color={"#FF685B"}
                  padding={"15px 40px"}
                  children={"Регистрация"}/>
            </ButtonsBox>}

            {reg === true && <FormRegistration handleOk={handleOk} handleAuth={handleAuth}/>}
            {auth === true && <FormAuthentication handleOk={handleOk} handleAuth={handleAuth}/>}

        </ModalStyled>
    )
}

export default ModalApp;
