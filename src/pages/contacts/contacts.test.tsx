import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacts from "./contacts";

describe('Contacts', () => {

    it('renders', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        );
        expect(screen.getByText('Контакты')).toBeInTheDocument();
    })
})
