import React, { useContext } from "react";
import landingIcon from "../assets/images/landing-icon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/features/auth";

const Landing = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <img src={landingIcon} className="landing-icon" alt="icon" />
        <h1 className="landing-title">Get Started Today</h1>
        <button
          className="landing-btn"
          onClick={() => navigate(user.username ? "/form" : "/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
