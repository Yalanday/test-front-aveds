import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setUsers, setCurrentUser} from "../../store/users-slice";
import {getRandomInt} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
//components
import {Button, Form, Input} from 'antd';
//types
import type {FieldType, FormRegistrationProps, UserType} from "../../types/types";
import type {FormProps} from 'antd';


const FormRegistration: React.FC<FormRegistrationProps> = ({handleOk, handleAuth}) => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const {users} = useAppSelector((state) => state.users);
    const navigate = useNavigate();

    const createUser = (data: any): UserType => {
        return {
            id: getRandomInt(10, 10000000),
            username: data.username,
            login: data.login,
            password: data.password
        }
    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Отправлено:', values);
        const newUser = createUser(values);
        dispatch(setUsers([...users, newUser]));
        dispatch(setCurrentUser(newUser));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        form.resetFields();
        handleAuth();
        handleOk();
        navigate('/personal-room/');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Ошибка:', errorInfo);
    };

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])

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
                rules={[{required: true, message: 'Пожалуйста введите логин!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Имя"
                name="username"
                rules={[{required: true, message: 'Пожалуйста введите имя!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Введите пароль не менее 8 символов!'}]}
            >
                <Input.Password minLength={8}/>
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
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormRegistration;
