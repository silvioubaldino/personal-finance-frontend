import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/relatorios">Relatórios</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
};

export default NavBar;