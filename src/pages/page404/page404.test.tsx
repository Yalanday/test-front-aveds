import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Page404 from "./page404";

describe('Page404', () => {

    it('renders', () => {
        render(
            <BrowserRouter>
                <Page404/>
            </BrowserRouter>
        );
        expect(screen.getByText('Not Found 404')).toBeInTheDocument();
    })
})
