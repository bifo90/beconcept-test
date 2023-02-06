import useStateApp from './store/store'
import Login from './components/Login'
import Lighthouse from './pages/Lighthouse'
import PageSpeed from './pages/PageSpeed'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    const isLogged = useStateApp((state) => state.login)
    return (
        <>
            <div className='min-h-screen'>
                { !isLogged ? (
                    <Login />
                ) : (
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route index element={<Home />} />
                            <Route path="/lighthouse" element={<Lighthouse />} />
                            <Route path="/pagespeed" element={<PageSpeed />} />
                        </Routes>
                    </BrowserRouter>
                )}
            </div>
        </>
    )
}
