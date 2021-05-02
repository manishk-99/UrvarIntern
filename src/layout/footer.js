import React from "react";
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="w-container">
          <div className="footer-flex-container">
            <a
              href="/"
              aria-current="page"
              className="footer-logo-link-2 w-inline-block w--current"
            >
              <img
                src="https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e15f877ae541781ff_Urvar%20Logo.png"
                width="100"
                alt=""
                className="footer-image-2"
              />
            </a>
            <div className="div-block-11">
              <h2 className="footer-heading">About</h2>
              <ul role="list" className="list w-list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Company
                  </a>
                </li>
                <li>
                  <a href="./#/Help2" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="./#/Privacy2" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms&nbsp;&amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="div-block-10">
              <h2 className="footer-heading">Get in touch</h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/company/urvar"
                    target="_blank"
                    className="footer-link"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/urvarindia/"
                    className="footer-link"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/urvarorganic/"
                    target="_blank"
                    className="footer-link"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-block">
            Copyright © 2020 Eximap Nisarg Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
