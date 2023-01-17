import { Link } from "react-router-dom";

import "../style/components/navbar.css"

const NavBar = () => {
  return (
    <div className="container-nav">
      <Link className="link-nav" to="/">Inicio</Link>
      <Link className="link-nav" to="/relatorios">Relatórios</Link>
      <Link className="link-nav" to="/sobre">Sobre</Link>
    </div>
  );
};

export default NavBar;