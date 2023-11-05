import AuthProvider from "./features/auth";
import PhotoProvider from "./features/photo";
import PopupProvider from "./features/popup";
import DataProvider from "./features/data";

const ContextProvider = ({ children }) => {
  return (
    <PhotoProvider>
      <AuthProvider>
        <PopupProvider>
          <DataProvider>{children}</DataProvider>
        </PopupProvider>
      </AuthProvider>
    </PhotoProvider>
  );
};

export default ContextProvider;
