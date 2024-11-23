import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Index from "./pages/index.jsx";
import * as React from 'react'

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={<div>error</div>}></Route>

                <Route path="/" element={<div>main</div>}></Route>
                <Route path="/index" element={<div><Index></Index></div>}></Route>

            </Routes>
        </HashRouter>
    )
}