import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import {
    MainPage,
    MainHeader,
    Basic,
    Sql,
    Api
} from "./components/index"
import { GlobalStyle } from './components/style';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/basic' element={
                    <>
                        <MainHeader />
                        <Basic />
                    </>
                }/>
                <Route path='/sql' element={
                    <>
                        <MainHeader />
                        <Sql />
                    </>
                }/>
                <Route path='/api' element={
                    
                    <>
                        <MainHeader />
                        <Api />
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
