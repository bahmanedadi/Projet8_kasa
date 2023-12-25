import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
    return (

        <div className="error">
            
                <p className="error_nbr">404</p>
                
                <p className="error_text">Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className="error_Link">
          Retourner sur la page d'accueil
        </Link>
           
        </div>
    );
};

export default Error;