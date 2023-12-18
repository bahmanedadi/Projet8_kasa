import logo from "../../assets/images/logo/LOGO.svg";


export default function Header() {
  return (
    <header className="header">
     <figure className="header_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
    </header>
  );
}