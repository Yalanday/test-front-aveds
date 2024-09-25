import {render, screen} from "@testing-library/react";
import Header from "./header";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


describe('Header', () => {

    it('should render the header auth = True', () => {
        render(
            <BrowserRouter>
               <Header handleAuth={jest.fn} isAuthenticated={true} showModal={jest.fn}/>
            </BrowserRouter>
        );
        expect(screen.getByText('Контакты')).toBeInTheDocument();
        expect(screen.getByText('Выйти')).toBeInTheDocument();
    });

    it('should render the header auth = False', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element={<Header handleAuth={jest.fn} isAuthenticated={false} showModal={jest.fn}/>}/>
                </Routes>
            </BrowserRouter>
        );
        expect(screen.getByText('Войти')).toBeInTheDocument();
    });
})
