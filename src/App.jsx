import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import FormPage from "./pages/FormPage";
import { useContext } from "react";
import { PopupContext } from "./context/features/popup";
import { AuthContext } from "./context/features/auth";
import ApiPage from "./pages/ApiPage";
import NotFound from "./pages/NotFound";

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
        <Route
          path="/api"
          element={
            <ProtectedRoute>
              <ApiPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
