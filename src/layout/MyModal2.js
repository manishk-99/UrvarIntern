import React, { useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";

export const MyModal2 = () => {
  const { modal2, setModal2 } = useSupplyDemand();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [targetprice, setTargetprice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Supply")
      .add({
        name: name,
        phone: phone,
        quantity: quantity,
        targetprice: targetprice,
        location: location
      })
      .then(() => {
        return toast("Demand Submitted", { type: "success" });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="modal-container">
      <div className="myModal">
        <ToastContainer />
        <button
          className=" btn btn-sm btn-danger closeBtn"
          onClick={() => setModal2(false)}
        >
          {" "}
          X{" "}
        </button>{" "}
        <form class="form" onSubmit={handleSubmit}>
          <h2>Supply Slot</h2>

          <label for="Name-3" class="field-label">
            Name
          </label>
          <input
            type="text"
            class="text-field w-input"
            maxlength="256"
            name="name"
            data-name="Name"
            placeholder="Enter your name"
            id="Name-3"
            required=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="Phone-Number-2" class="field-label-2">
            Phone Number
          </label>
          <input
            type="tel"
            class="text-field-2 w-input"
            maxlength="256"
            name="phoneNumber"
            data-name="Phone Number 2"
            placeholder="+91"
            id="Phone-Number-2"
            required=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="Quantity-3" class="field-label-3">
            Quantity
          </label>
          <input
            type="tel"
            class="text-field-2 w-input"
            maxlength="256"
            name="quantity"
            data-name="Phone Number 2"
            placeholder="+91"
            id="Phone-Number-2"
            required=""
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label for="Target-Price-2" class="field-label-4">
            Target Price
          </label>

          <input
            type="number"
            class="text-field-4 w-input"
            maxlength="256"
            name="price"
            data-name="Target Price 2"
            placeholder="INR"
            id="Target-Price-2"
            required=""
            value={targetprice}
            onChange={(e) => setTargetprice(e.target.value)}
          />
          <label for="Location-2" class="field-label-4">
            Location
          </label>
          <input
            type="text"
            class="text-field-4 w-input"
            maxlength="256"
            name="location"
            data-name="Location 2"
            placeholder="Delivery Location"
            id="Location-2"
            required=""
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            value="Submit"
            data-wait="Please wait..."
            class="submit-button w-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
