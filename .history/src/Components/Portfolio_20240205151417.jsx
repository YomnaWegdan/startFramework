import React, { Fragment, useState } from "react";
import {  FaStar } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import img1 from "../images/poert1.png";
import img2 from "../images/port2.png";
import img3 from "../images/port3.png";

export default function Portfolio() {
  const [image, setImage] = useState([img1, img2, img3]);
  const [model, setModel] = useState(false);
  const [selectImg , setSelectImg] = useState(null)

  const toggleModel = (index) => {
    setModel(!model);
    setSelectImg(index)
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
                <div></div>
                  <img
                    src={img}
                    className="w-100"
                    alt="lol"
                    onClick={()=>toggleModel(index)}
                  />
                </div>
              ))
            ) : (
              <div className="model position-fixed top-0 left-0 w-100 h-100 overflow-hidden bg-dark d-flex align-items-center justify-content-center">
                <div className="w-50 h-50 position-relative">
                  <IoCloseOutline onClick={()=>toggleModel(null)} className="text-white position-absolute end-0 fs-4"/>
                  <img src={image[selectImg]} className="w-100" alt="lol" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
