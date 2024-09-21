import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useNavigate} from "react-router-dom";

//components
import {Button, Form, Input} from 'antd';
//types
import type {FormProps} from 'antd';
import {FieldType, FormRegistrationProps} from "../../types/types";
import {setCurrentUser} from "../../store/users-slice";

const FormAuthentication: React.FC<FormRegistrationProps> = ({handleOk, handleAuth}) => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const {users} = useAppSelector((state) => state.users);
    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const navigate = useNavigate();

    const getInputValueName = () => {
        return inputValueName
    }

    const getInputValuePassword = () => {
        return inputValuePass
    }

    const createUserDataForCheck = () => {
        return {
            login: getInputValueName(),
            password: getInputValuePassword(),
        }
    }

    const userData = createUserDataForCheck();

    const identifyUser = () => {
        return users.find((user) => user.login === userData.login && user.password === userData.password);
    }

    useEffect(() => {
        createUserDataForCheck();
        console.log(userData);
    }, [inputValueName, inputValuePass])


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Отправлено:', values);
        const currentUser = identifyUser();
        if (currentUser) {
            dispatch(setCurrentUser(currentUser));
            handleAuth();
        }
        form.resetFields();
        handleOk();
        navigate('/personal-room/');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Ошибка:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{span: 4}}
            wrapperCol={{span: 20}}
            style={{
                maxWidth: 450,
                fontFamily: 'Montserrat',
                fontWeight: '600',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Логин"
                name="login"
                rules={[
                    {
                        required: true,
                        message: "",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            const login = getFieldValue('login');
                            console.log(login)
                            const user = users.find((user) => user.login === login);
                            console.log(user)
                            if (!user) {
                                return Promise.reject(new Error('Нет такого пользователя!'));
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}

            >
                <Input

                    onChange={(e) => {
                        setInputValueName(e.target.value)
                    }}/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            const login = getFieldValue('login');
                            const password = getFieldValue('password');
                            const user = users.find((user) => user.login === login && user.password === password);
                            if (!user) {
                                return Promise.reject(new Error('Неверный пароль!'));
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}
            >
                <Input.Password
                    onChange={(e) => {
                        setInputValuePass(e.target.value)
                    }}
                    minLength={8}/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 9, span: 16}} style={{marginBottom: "0"}}>
                <Button
                    style={{
                        backgroundColor: '#ff685b',
                        fontWeight: '500',
                        fontFamily: 'Montserrat',
                        color: 'white',
                        margin: '0 auto'
                    }} type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormAuthentication;
