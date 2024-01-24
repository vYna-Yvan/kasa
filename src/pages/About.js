import React from "react";
import "../style/About.css";
import Aboutimg from "../assets/image/About-image.jpeg";

import Dropdown from "../components/dropdown/Dropdown";

const dropdownData = [
  {
    title: "Flabalité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vértifiées par nos eéquipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation de voidsinage entraînera une exclusion de plateforme.",
  },
  {
    title: "Service",
    description:
      "La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation de voidsinage entraînera une exclusion de plateforme.",
  },
  {
    title: "Sécurité",
    description: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note à l'hôtes qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domistique pour nos hôtes. `,
  },
];

const About = () => {
  return (
    <div className="about_container">
      <div className="img_box">
        <img src={Aboutimg} alt="forest-montain" />
      </div>
      <div className="dropdown_box">
        {dropdownData.map((data) => (
          <Dropdown data={data} type="string" />
        ))}
      </div>
    </div>
  );
};

export default About;
