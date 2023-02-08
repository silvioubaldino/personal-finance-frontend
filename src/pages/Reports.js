import NavBar from "../components/Navbar";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { readStorage } from "../utils/handleLocalStorage";

import '../style/pages/report.css';

const Report = () => {
  const history = useHistory();

  useEffect(() => {
    const token = readStorage();
    console.log(token);
    if (!token || token.length < 1) {
      history.push('/login');
    }
  }, []);
  return (
    <div className="container-reports">
      <NavBar />
    </div>
  );
};

export default Report;