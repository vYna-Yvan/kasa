import React from "react";
import "../style/Err.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error_box">
      <h1 className="error">404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="linkHome" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
