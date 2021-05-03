import React, { useEffect, useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";
import { MyModal } from "./MyModal";
import { db } from "../firebase";
const Supply = () => {
  const { modal, setModal } = useSupplyDemand();
  const [demand, setDemand] = useState([]);
  useEffect(() => {
    db.collection("demand").onSnapshot((snapshot) => {
      setDemand(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="supply  container-4 w-container">
      {modal ? <MyModal /> : ""}
      <button className="btn btn-md btn-success" onClick={() => setModal(true)}>
        I have a demand
      </button>
      <div className="section-2">
        <div className="container-2 w-container">
          <h1 className="heading-44">List of supply available from farmers</h1>
        </div>
      </div>
      <div
        className="w-layout-grid grid-9"
        // style={{
        //   marginRight: "50rem",
        //   marginTop: "2.5rem",
        //   marginLeft: "20rem"
        // }}
      >
        <img
          className="image-6"
          src="https://uploads-ssl.webflow.com/5fbf5bf9377fbea654b8abad/5ffcb94675b5af4eecb4ce75_image%2014.png"
          width="220"
          height="240"
          alt=""
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 352px, 458px"
          id="w-node-_15e6b1d8-8e5b-7b14-e590-e52eca4b5593-c959d0f2"
          loading="lazy"
          srcset="https://uploads-ssl.webflow.com/5fbf5bf9377fbea654b8abad/5ffcb94675b5af4eecb4ce75_image%2014-p-500.png 500w, https://uploads-ssl.webflow.com/5fbf5bf9377fbea654b8abad/5ffcb94675b5af4eecb4ce75_image%2014.png 607w"
        />
        <div className="div-block-8">
          <h3 className="heading-17">TUAR</h3>
          <h3 className="heading-19">Quantity</h3>
          <h3 className="heading-21">Certification</h3>
        </div>
        <div className="div-block-9">
          <h3 className="heading-18">organic</h3>
          <h3 className="heading-20">20 QUINTAL</h3>
          <h3 className="heading-22">PGS</h3>
        </div>
      </div>
    </div>
  );
};
export default Supply;
