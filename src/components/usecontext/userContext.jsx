import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {  // here children is nothing but whole app component
  const userData = {
    name: "vinod",
    age: 28,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
