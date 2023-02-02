import NavBar from "../components/Navbar";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { readStorage } from "../utils/handleLocalStorage";

import '../style/pages/about.css';

const About = () => {
  const history = useHistory();

  useEffect(() => {
    const token = readStorage();
    console.log(token);
    if (!token || token.length < 1) {
      history.push('/login');
    }
  }, []);
  return (
    <div className="container-about">
      <NavBar />
    </div>
  );
};

export default About;