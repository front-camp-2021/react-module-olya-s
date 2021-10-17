import './style.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="index.html" className="header__logo-link">
          <img className="header__image" src="images/logo.svg" alt="shop logo" />
          <h1 className="header__title">Online Store</h1>
        </a>
      </nav>
    </header>
  )
}

export default Header;