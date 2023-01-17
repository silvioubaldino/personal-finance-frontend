import { Link } from "react-router-dom";

import "../style/components/navbar.css"

const NavBar = () => {
  return (
    <div className="container-nav">
      <Link to="/">Inicio</Link>
      <Link to="/relatorios">Relatórios</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
};

export default NavBar;