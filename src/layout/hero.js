import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container-4 w-container">
          <div className="w-layout-grid grid">
            <div className="div-block">
              <h1 className="heading-2">
                Join India’s Largest <span className="text-span">Organic </span>
                Ecosystem
              </h1>
              <h2 className="heading">
                A one stop destination for farmers
                <br />
                &amp; traders.
              </h2>
              <a href="./#/Supply2" className="button w-button">
                {" "}
                See Supply
              </a>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e5ec81e86612d9fc8_Urvar%20Illustration.png"
              loading="lazy"
              width="300"
              id="w-node-8e4db7f9e1cc-ce59d0d1"
              srcset="https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e5ec81e86612d9fc8_Urvar%20Illustration-p-800.png 800w, https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e5ec81e86612d9fc8_Urvar%20Illustration-p-1080.png 1080w, https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e5ec81e86612d9fc8_Urvar%20Illustration.png 1376w"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, 640px"
              alt=""
              className="image-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
