import logo from "../../assets/images/logo/LOGO.svg";
import { NavLink } from "react-router-dom";

 function Header() {
  return (
    <>
    <header className="header">
     <figure className="header_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="header_nav">
        <ul >
          <NavLink className={(link) => (link.isActive ? "header_nav_item header_nav_active" : "header_nav_item")}  to="/">Accueil</NavLink>
          <NavLink className={(link) => (link.isActive ? "header_nav_item header_nav_active" : "header_nav_item")} to="/about">A Propos</NavLink>
        </ul>
      </nav>

    </header>
    </>
  );
}
export default Header;