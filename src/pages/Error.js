import React from "react";
import "../style/Error.css";

const Error = () => {
  return (
    <div className="error_box">
      <h1 className="error">404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <p>Retourner sur la page d’accueil</p>
    </div>
  );
};

export default Error;
