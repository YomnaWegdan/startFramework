import React from "react";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
        <div c></div>
        <div className="d-flex ">
          <div>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div>
            <h3>AROUND THE WEB</h3>
            <div>
            <ul>
            <li> <FaFacebookF /> </li>
           
            </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
