import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/features/auth";
import { PopupContext } from "../context/features/popup";
import Popup from "./Popup";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  const { isPopupActive, togglePopup } = useContext(PopupContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <section className="col1">
        {pathname === "/api" ? (
          <i
            className="material-icons back-icon"
            onClick={() => navigate("/form")}
          >
            keyboard_backspace
          </i>
        ) : null}
        <h2 className="nav-title">Form</h2>
      </section>
      <section className="col2">
        <Link to={"/api"} className="link">
          API
        </Link>
        <div className="divider"></div>
        <div className="user-info">
          <h3 className="username">{user?.username}</h3>
          <div className="avatar-wrapper">
            <img
              src={user?.avatar}
              alt="avatar"
              className="user-avatar"
              onClick={togglePopup}
            />
            {isPopupActive ? <Popup /> : null}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
