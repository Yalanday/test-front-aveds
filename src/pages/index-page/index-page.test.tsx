import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IndexPage from "./index-page";

describe("IndexPage", () => {

    it("renders index", () => {
        render(
            <BrowserRouter>
                <IndexPage isAuthenticated={false} showModal={jest.fn}/>
            </BrowserRouter>
        );
        // expect(screen.getByText('Онлайн-прием')).toBeInTheDocument();
        expect(screen.getByText('Место для получения медицинской помощи')).toBeInTheDocument();

    })
})
