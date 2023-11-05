import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import FormPage from "./pages/FormPage";
import { useContext } from "react";
import { PopupContext } from "./context/features/popup";
import { AuthContext } from "./context/features/auth";

const App = () => {
  const { isOverlayActive, togglePopup } = useContext(PopupContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      {isOverlayActive ? (
        <div className="overlay" onClick={togglePopup}></div>
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={user?.username ? <Navigate to="/form" /> : <Auth />}
        />
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <FormPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
