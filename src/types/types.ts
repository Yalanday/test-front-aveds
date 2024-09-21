import React from 'react';
import store from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type HeaderProps = {
    isAuthenticated: boolean;
    showModal: () => void;
    handleAuth: () => void;
}

export type ButtonsBoxProps = {
    children: React.ReactNode;
    className?: string;
    marginbot?: string;
}

export type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    bgcolor: string;
    padding?: string;
    color?: string;
    fontSize?: string;
    onClick?: React.MouseEventHandler | React.KeyboardEventHandler;
}

export type PropsCard = {
    title: string,
    description: string,
    img?: string,
    id: number,
    order: number;
}

export type PropsModal = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    handleAuth: () => void;
}

export type FieldType = {
    login?: string;
    username?: string;
    password?: string;
};

export type PropsPersonalRoom = {
    isAuthenticated: boolean;
    handleAuth: () => void;
};

export type UserType = {
    id: number,
    username: string,
    login: string,
    password: string,
}

export type UsersType = {
    users: UserType[],
    currentUser?: UserType,
};


export type FormRegistrationProps = {
    handleOk: () => void;
    handleAuth: () => void;
}

export type IndexPageProps = {
    isAuthenticated: boolean;
    showModal: () => void;
};

