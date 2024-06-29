import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <h1>
          Manage Client Data With <span className="catch">Ease!</span>
        </h1>
        <Link to="/dashboard" className="hero-btn">
          Manage Now
        </Link>
      </div>
    </>
  );
};

export default Hero;
