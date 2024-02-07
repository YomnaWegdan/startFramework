import React, { Fragment, useState } from "react";
import { FaClosedCaptioning, FaStar } from "react-icons/fa6";
import img1 from "../images/poert1.png";
import img2 from "../images/port2.png";
import img3 from "../images/port3.png";

export default function Portfolio() {
  const [image, setImage] = useState([img1, img2, img3]);
  let [model, setModel] = useState(false);
  const toggleModel = () => {
    setModel(model === true);;
    console.log(model)
  }
  return (
    <Fragment>
      <section className="portfolio vh-100 ">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center align-content-center">
            <div className="col-md-12">
              <h2>PORTFOLIO COMPONENT</h2>
              <div className="d-flex justify-content-center align-items-center my-3">
                <div className="line text-bg-dark"></div>
                <FaStar className=" mx-2 " />
                <div className="line text-bg-dark"></div>
              </div>
            </div>

            {model === false ? (
              image.map((img, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <img
                    src={img}
                    className="w-100"
                    alt="lol"
                    onClick={toggleModel}
                  />
                </div>
              ))
            ) : (
              <div className="model position-fixed top-0 left-0 w-100 h-100 overflow-hidden bg-dark d-flex align-items-center justify-content-center">
                <div className="w-50 h-50 ">
                  <FaClosedCaptioning onClick={setModel( model===)}/>
                  <img src={img1} className="w-100" alt="lol" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
