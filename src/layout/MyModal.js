import React, { useState } from "react";
import { useSupplyDemand } from "../context/SupplyDemandProvider";

export const MyModal = ({ id }) => {
  const { modal, setModal } = useSupplyDemand();
  //   const [product, setProduct] = useState({
  //     name: "",
  //     phoneNumber: "",
  //     quantity: "",
  //     price: "",
  //     location: ""
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //  console.log()

  //   }

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setProduct({
  //       ...product,
  //       [name]: value
  //     });

  //     console.log(product)
  //   };

  return (
    <div className="modal-container">
      <div className="myModal">
        <button
          className=" btn btn-sm btn-danger closeBtn"
          onClick={() => setModal(false)}
        >
          {" "}
          X{" "}
        </button>{" "}
        <form class="form">
          <h2>Book your demand</h2>

          <label for="Name-3" class="field-label">
            Name
          </label>
          <input
            type="text"
            class="text-field w-input"
            maxlength="256"
            name="name"
            // value={product.name}
            // onChange={(e) => handleChange(e)}
            data-name="Name"
            placeholder="Enter your name"
            id="Name-3"
            required=""
          />
          <label for="Phone-Number-2" class="field-label-2">
            Phone Number
          </label>
          <input
            type="tel"
            class="text-field-2 w-input"
            maxlength="256"
            name="phoneNumber"
            // value={product.phoneNumber}
            // onChange={(e) => handleChange(e)}
            data-name="Phone Number 2"
            placeholder="+91"
            id="Phone-Number-2"
            required=""
          />
          <label for="Quantity-3" class="field-label-3">
            Quantity
          </label>
          <input
            type="tel"
            class="text-field-2 w-input"
            maxlength="256"
            name="quantity"
            // value={product.quantity}
            // onChange={(e) => handleChange(e)}
            data-name="Phone Number 2"
            placeholder="+91"
            id="Phone-Number-2"
            required=""
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
            // value={product.price}
            // onChange={(e) => handleChange(e)}
            placeholder="INR"
            id="Target-Price-2"
            required=""
          />
          <label for="Location-2" class="field-label-4">
            Location
          </label>
          <input
            type="text"
            class="text-field-4 w-input"
            maxlength="256"
            name="location"
            // value={product.location}
            data-name="Location 2"
            // onChange={(e) => handleChange(e)}
            placeholder="Delivery Location"
            id="Location-2"
            required=""
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
