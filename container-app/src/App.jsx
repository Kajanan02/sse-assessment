import './App.css'
import {Route, Routes} from "react-router-dom";
import AppLayout from "./components/templates/AppLayout.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import DashboardActivityPage from "./components/pages/DashboardActivityPage.jsx";
import LogPage from "./components/pages/LogPage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path={"/"} element={<DashboardPage/>}/>
                    <Route path={"/log"} element={<LogPage/>}/>
                    <Route path={"/dashboard-activity"} element={<DashboardActivityPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
