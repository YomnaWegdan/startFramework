import React from "react";
import { FaFacebookF, FaGlobe, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer cl>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 col-md-6">
            <h3>AROUND THE WEB</h3>
            <ul className="d-flex justify-content-center align-items-center list-unstyled">
            <li className="p-2 rounded-circle border border-white border-2"> <FaFacebookF /> </li>
            <li className="p-2 rounded-circle border border-white border-2 mx-2"> <FaTwitter/> </li>
            <li className="p-2 rounded-circle border border-white border-2 me-2"> <FaLinkedinIn /> </li>
            <li className="p-2 rounded-circle border border-white border-2"> <FaGlobe /> </li>

           
            </ul>

            </div>

          </div>
        </div>
        
      </footer>
    </>
  );
}
