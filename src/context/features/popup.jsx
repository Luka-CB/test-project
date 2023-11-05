import { createContext, useState } from "react";

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const togglePopup = () => {
    setIsOverlayActive(!isOverlayActive);
    setIsPopupActive(!isPopupActive);
  };

  const contextData = {
    isOverlayActive,
    setIsOverlayActive,
    isPopupActive,
    togglePopup,
  };

  return (
    <PopupContext.Provider value={contextData}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
