import React, { useEffect, useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";
import { MyModal } from "./MyModal";
const Demand = () => {
  const { modal, setModal } = useSupplyDemand();
  return (
    <div>
      {modal ? <MyModal /> : ""}
      <button className="btn btn-md btn-success" onClick={() => setModal(true)}>
        I have a Supply
      </button>
      <div class="section-2">
        <div class="container-2 w-container">
          <h1 class="heading-44">List of Demand available from farmers</h1>
        </div>
      </div>
    </div>
  );
};
export default Demand;
