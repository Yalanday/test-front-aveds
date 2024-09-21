import React from 'react';
//components
import MainContactsPage from "./contacts-styled";

const Contacts: React.FC = () => {
    return (
        <>
            <MainContactsPage>
                <div className="main__container">
                    <h1 className="main__title">Контакты</h1>
                </div>
            </MainContactsPage>
        </>
    )
}

export default Contacts;
