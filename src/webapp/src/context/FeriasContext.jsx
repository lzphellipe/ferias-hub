import { createContext, useState } from "react";

export const FeriasContext = createContext();

export const FeriasProvider = ({ children }) => {
  const [statusFerias, setStatusFerias] = useState(null);

  return (
    <FeriasContext.Provider value={{ statusFerias, setStatusFerias }}>
      {children}
    </FeriasContext.Provider>
  );
};
