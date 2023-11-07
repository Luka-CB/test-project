import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/index.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
