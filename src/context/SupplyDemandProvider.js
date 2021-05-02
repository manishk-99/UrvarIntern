import { createContext, useContext, useState } from "react";

export const SupplyDemandContext = createContext();

export const SupplyDemandProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  return (
    <SupplyDemandContext.Provider
      value={{ modal, setModal, modal2, setModal2 }}
    >
      {children}
    </SupplyDemandContext.Provider>
  );
};

export const useSupplyDemand = () => useContext(SupplyDemandContext);
