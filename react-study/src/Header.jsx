import logo from "./assets/react-logo.png";
function Header() {
    return (
      <nav className="nav">
        <img src={logo} alt="" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }

  export default Header