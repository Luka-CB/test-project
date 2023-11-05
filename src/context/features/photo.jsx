import { createContext, useState } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [isError, setIsError] = useState(false);

  const contextData = {
    image,
    setImage,
    isError,
    setIsError,
  };

  return (
    <PhotoContext.Provider value={contextData}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
