import React, { Fragment } from 'react'
import { FaStar } from "react-icons/fa6";

export default function About() {
  return (
    <Fragment>
    <section className='about '></section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>ABOUT COMPONENT</h2>
            <div className='d-flex justify-content-center align-items-center my-3'>
                    <div className='line'></div>
                    <FaStar className=' mx-2 '/>
                    <div className='line'></div>
                </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source 
          files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        </div>
        <div className='col-lg-6 col-md-12'>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source 
          files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        </div>

      </div>
    </Fragment>
  )
}
