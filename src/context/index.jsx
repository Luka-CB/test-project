import AuthProvider from "./features/auth";
import PhotoProvider from "./features/photo";
import PopupProvider from "./features/popup";
import DataProvider from "./features/data";
import ApiProvider from "./features/api";

const ContextProvider = ({ children }) => {
  return (
    <PhotoProvider>
      <AuthProvider>
        <PopupProvider>
          <DataProvider>
            <ApiProvider>{children}</ApiProvider>
          </DataProvider>
        </PopupProvider>
      </AuthProvider>
    </PhotoProvider>
  );
};

export default ContextProvider;
