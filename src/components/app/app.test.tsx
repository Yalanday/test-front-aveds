import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../../store/store";
import App from "./App";

describe('App', () => {

    it('renders', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                   <App />
                </Provider>
            </BrowserRouter>
        );

        expect(screen.getByText('Место для получения медицинской помощи')).toBeInTheDocument();
        expect(screen.getByText('Онлайн-прием')).toBeInTheDocument();
        expect(screen.getByText('Лечение рака')).toBeInTheDocument();
        expect(screen.getByText('Экстренный Случай')).toBeInTheDocument();
    })
})
