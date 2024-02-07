import React, { Fragment } from 'react'
import img from '../images/avataaars.svg';
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <Fragment>
      <section className='home vh-100 text-white'>
        <div className='container h-100'>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-md-12'>
                <img src={img} className='w-20 mb-3' alt='img'/>
                <h2 className='fw-bold'>START FRAMEWORK</h2>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <div className='line'></div>
                    <FaStar className=' mx-2 '/>
                    <div className='line'></div>
                </div>
                <div>Graphic Artist - Web Designer - Illustrator</div>
                
                
                
                </div>
            </div>
        </div>
      
      </section>
    </Fragment>
  )
}
