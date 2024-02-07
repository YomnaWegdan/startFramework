import React, { Fragment } from 'react'
import {   FaStar } from "react-icons/fa6";

export default function Contact() {
  return (
    <Fragment>
      <section className="contact py-5  ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center justify-content-center align-content-center">
            <div className="col-md-12">
              <h2 className="pt-5">CONTACT COMPONENT</h2>
              <div className="d-flex justify-content-center align-items-center my-3">
                <div className="line text-bg-dark"></div>
                <FaStar className=" mx-2 " />
                <div className="line text-bg-dark"></div>
              </div>
            </div>

            <div className=" col-md-12">
            <form>
              <input className=' form-control' placeholder='userName' name='name'/>
              <input className=' form-control' placeholder='userAge' name='age'/>
              <input className=' form-control' placeholder='userEmail' name='email'/>
              <input className=' form-control' placeholder='userPassword' name='password'/>

            </form>
            </div>


          </div>
        </div>
        </section>
    </Fragment>
  )
}
