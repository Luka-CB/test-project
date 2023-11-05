import { createContext, useState } from "react";

export const AuthContext = createContext();

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userFromStorage);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const login = (payload) => {
    setUser(payload);
    localStorage.setItem("user", JSON.stringify(payload));
    setIsLoginSuccess(true);
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem("user");
    window.location.reload();
  };

  const contextData = {
    user,
    login,
    isLoginSuccess,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
