import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setIsAuthenticated} from "../../store/is-authenticated-slice";
//components
import IndexPage from "../../pages/index-page/index-page";
import Contacts from "../../pages/contacts/contacts";
import PersonalRoom from "../../pages/personal-room/peronal-room";
import Page404 from "../../pages/page404/page404";
import ModalApp from "../modal-app/modal-app";
import Header from "../../layouts/header/header";

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isAuthenticated} = useAppSelector(state => state.isAuthenticated);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authStatus, setAuthStatus] = useState(isAuthenticated)
    const handleAuth = () => {
        setAuthStatus(!isAuthenticated)
        dispatch(setIsAuthenticated(!isAuthenticated))
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        localStorage.setItem('authStatus', JSON.stringify(isAuthenticated))
    }, [authStatus])

    return (
        <>
            <Header handleAuth={handleAuth} isAuthenticated={isAuthenticated} showModal={showModal}/>
            <Routes>
                <Route path="/" element={<IndexPage isAuthenticated={isAuthenticated} showModal={showModal}/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                {isAuthenticated &&
                    <Route path="/personal-room"
                           element={<PersonalRoom handleAuth={handleAuth} isAuthenticated={isAuthenticated}/>}/>
                }
                <Route path="*" element={<Page404/>}/>
            </Routes>
            <ModalApp handleAuth={handleAuth} isModalOpen={isModalOpen} handleOk={handleOk}
                      handleCancel={handleCancel}/>
        </>
    );
}

export default App;
