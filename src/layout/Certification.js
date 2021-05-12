import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";
const Certification = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Certification")
      .add({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        location: location
      })
      .then(() => {
        return toast("Message Submitted", { type: "success" });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="w-layout-grid hero-grid">
        <div id="w-node-6f4af3f6e12f-aa59d0f9" className="opt-in-content">
          <div className="text-caps">Reach out to us</div>
          <h1 className="heading-1">
            Looking for <br />‍<span className="text-span-5">organic </span>
            certification
          </h1>
          <p className="text">
            Get in touch with one of our best consultants today!
          </p>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="hero-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <div className="w-layout-grid form-grid">
                  <input
                    type="text"
                    className="form-input w-input"
                    maxlength="256"
                    name="First-Name"
                    data-name="First Name"
                    placeholder="First Name"
                    id="First-Name"
                    required=""
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-input w-input"
                    maxlength="256"
                    name="Last-Name"
                    data-name="Last Name"
                    placeholder="Last Name"
                    id="Last-Name"
                    required=""
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input w-input"
                  maxlength="256"
                  name="Email-Address"
                  data-name="Email Address"
                  placeholder="Email Address"
                  id="Email-Address"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-input w-input"
                  maxlength="256"
                  name="Phone-Number"
                  data-name="Phone Number"
                  placeholder="Phone Number"
                  id="Phone-Number"
                  required=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-input w-input"
                  maxlength="256"
                  name="Location"
                  data-name="Location"
                  placeholder="Location"
                  id="Location"
                  required=""
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="button-3 w-button"
              />
            </form>
          </div>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fc54d742c699969e50872dc_undraw_agreement_aajr.svg"
          loading="lazy"
          width="442.5"
          height="640"
          alt=""
          className="image-9"
        />
      </div>
    </div>
  );
};
export default Certification;
