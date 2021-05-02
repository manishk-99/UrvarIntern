import React, { useEffect, useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";
import { MyModal2 } from "./MyModal2";
const Demand = () => {
  const { modal2, setModal2 } = useSupplyDemand();
  return (
    <div>
      {modal2 ? <MyModal2 /> : ""}
      <button
        className="btn btn-md btn-success"
        onClick={() => setModal2(true)}
      >
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
