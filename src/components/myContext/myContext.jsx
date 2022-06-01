import { createContext, useState, useContext } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [shown, setShown] = useState(false);

  return <myContext.Provider value={{ shown, setShown }}>{children}</myContext.Provider>;
}

export default ContextProvider;
