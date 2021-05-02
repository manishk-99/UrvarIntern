import React, { useEffect, useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";
import { MyModal } from "./MyModal";
const Supply = () => {
  const { modal, setModal } = useSupplyDemand();
  return (
    <div>
      {modal ? <MyModal /> : ""}
      <button className="btn btn-md btn-success" onClick={() => setModal(true)}>
        I have a demand
      </button>
      <div class="section-2">
        <div class="container-2 w-container">
          <h1 class="heading-44">List of supply available from farmers</h1>
        </div>
      </div>
    </div>
  );
};
export default Supply;
