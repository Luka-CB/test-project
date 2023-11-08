import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1 className="nums">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <div className="text-wrapper">
          <p className="text">Page Not Found!</p>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <i className="material-icons back-icon">keyboard_backspace</i>
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
