import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { SupplyDemandProvider } from "./context/SupplyDemandProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SupplyDemandProvider>
      <App />
    </SupplyDemandProvider>
  </StrictMode>,
  rootElement
);
