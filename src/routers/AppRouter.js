import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainScreen } from "../components/main/MainScreen"
import { PageNotFound } from "../components/pageNotFound/PageNotFound"
import { PersonajeInfo } from "../components/personaje/PersonajeInfo"
import { Navbar } from "../components/ui/Navbar"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="dashboard" element={<MainScreen />} />
                <Route path="personaje/:id" element={<PersonajeInfo />} />
                <Route index element={<MainScreen />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}