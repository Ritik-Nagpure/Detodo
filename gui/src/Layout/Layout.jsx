import Footer from "./Footer"
import Header from "./Header"
import Display from "./display"

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <header className="">
                <Header />
            </header>
            <main className=" flex-grow">
                <Display />
            </main>
            <footer className="">
                <Footer />
            </footer>

        </div>
    )
}

export default Layout