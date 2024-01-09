import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <div className="error">
        <p className="error_nbr">404</p>
        <p className="error_txt">Oups! La page que vous demandez n'existe pas</p>
        <Link to="/" className="error_Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
};
export default Error;