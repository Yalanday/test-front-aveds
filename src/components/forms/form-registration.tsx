import React, {useEffect, useState} from 'react';
import type {FormProps} from 'antd';
import {Modal, Button, Form, Input} from 'antd';
import {FieldType} from "../types/types";

type FormRegistrationProps = {
    handleOk: () => void;
    handleAuth: () => void;
}

const FormRegistration: React.FC<FormRegistrationProps> = ({ handleOk, handleAuth}) => {

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Отправлено:', values);
        form.resetFields();
        handleAuth();
        handleOk();
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
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
    )
}

export default FormRegistration;
