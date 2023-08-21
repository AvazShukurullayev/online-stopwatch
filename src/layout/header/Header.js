import "./Header.css"

const Header = ()=> {
    return (
        <header className="header p-3 shadow  bg-warning">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo text-decoration-none fs-3">Online StopWatch</a>
                    <ul className="nav__list d-flex align-items-center gap-3 m-0 p-0">
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none">About</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none">Contact</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none">Support</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;