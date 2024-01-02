import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo/LOGO.svg";


function Header() {
  return (
    <header className="header">
      <figure className="header_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="nav">
        <ul >
        
          <Link to="/" className="nav_item "  activeClassName="nav_item_active" >Accueil</Link>
          <Link to="/about" className="nav_item "  activeClassName="nav_item_active" >A Propos</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;