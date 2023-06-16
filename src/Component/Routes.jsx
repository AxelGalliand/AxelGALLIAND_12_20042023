import React from "react";
import {Page} from './Pages/Profil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function Routeur() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/:id' element={<Page/>}/>
            </Routes>
        </BrowserRouter>    
    )
}