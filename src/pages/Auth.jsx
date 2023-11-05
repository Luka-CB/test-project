import { useContext, useEffect, useState } from "react";
import AddPhoto from "../components/AddPhoto";
import { PhotoContext } from "../context/features/photo";
import { AuthContext } from "../context/features/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const { image, setIsError } = useContext(PhotoContext);
  const { login, isLoginSuccess } = useContext(AuthContext);

  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/form");
    }
  }, [isLoginSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      setIsError(true);
      return;
    }

    login({
      avatar: image,
      username,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1 className="form-title">Get Started</h1>
        <AddPhoto />
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="username">
            fill in your name
          </label>
          <input
            className="form-input"
            id="username"
            type="text"
            placeholder="your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="form-btn" disabled={!username}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
