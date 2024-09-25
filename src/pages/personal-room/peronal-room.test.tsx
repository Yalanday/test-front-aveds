import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PersonalRoom from "./peronal-room";
import {Provider} from "react-redux";
import store from "../../store/store";

describe('PersonalRoom', () => {

    it('renders', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<PersonalRoom isAuthenticated={true} handleAuth={jest.fn}/>}/>
                    </Routes>
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByText('Выйти из аккаунта')).toBeInTheDocument();
        expect(screen.getByText('Перейти в контакты')).toBeInTheDocument();
    })
})
