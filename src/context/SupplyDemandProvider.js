import { createContext, useContext, useState } from "react";

export const SupplyDemandContext = createContext();

export const SupplyDemandProvider = ({ children }) => {
  const [supply, setSupply] = useState([]);
  const [demand, setdemand] = useState([]);
  const [modal, setModal] = useState(false);
  return (
    <SupplyDemandContext.Provider
      value={{ supply, setSupply, demand, setdemand, modal, setModal }}
    >
      {children}
    </SupplyDemandContext.Provider>
  );
};

export const useSupplyDemand = () => useContext(SupplyDemandContext);
