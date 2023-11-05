import { useContext } from "react";
import { PopupContext } from "../context/features/popup";
import { AuthContext } from "../context/features/auth";

const Popup = () => {
  const { togglePopup } = useContext(PopupContext);
  const { logout } = useContext(AuthContext);

  return (
    <div className="popup">
      <span className="logout" onClick={logout}>
        Logout
      </span>
      <i className="material-icons cancel-icon" onClick={togglePopup}>
        cancel
      </i>
    </div>
  );
};

export default Popup;
