import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Footer"
import Header from "./Header"
import Display from "./Display"
import Profile from "../Profile/Profile"
import Login from "../Login/Login"

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <header className="">
                    <Header />
                </header>
                <main className=" flex-grow">
                    <Routes>
                        <Route path="/" element={<Display />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <footer className="">
                    <Footer />
                </footer>
            </BrowserRouter>
        </>
    )
}

export default Layout