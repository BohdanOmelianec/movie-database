import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="/">
                    <span>Movies</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="/">Documentation</a></li>
                    /
                    <li><a href="/">Contact us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;