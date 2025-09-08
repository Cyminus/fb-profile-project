import '../styles/Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="button-section">
                <a href="#" className="nav-icon active">⬅</a>
                <button className="title-btn"><h1 className="title">Milkie Mae Grapa Agabon▾</h1></button>
            </div>
            <nav className="header-nav">
             <a href="#" className="nav-icon active">🔍︎</a>
             </nav>
        </header>
    );
};

export default Header;