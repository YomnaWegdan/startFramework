import React from "react";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 col-md-6">
            <h3>AROUND THE WEB</h3>
            <ul className="d-flex">
            <li className="p-2 border"> <FaFacebookF /> </li>
           
            </ul>

            </div>

          </div>
        </div>
        
      </footer>
    </>
  );
}
