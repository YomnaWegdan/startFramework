import React, { Fragment } from 'react'
import img from '../images/avataaars.svg';
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <Fragment>
      <section className='home vh-100'>
        <div className='container h-100'>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-md-12'>
                <img src={img} className='w-20' alt='img'/>
                <h2 className='fw-bold'>START FRAMEWORK</h2>
                <div>
                    <div></div>
                    <FaStar className='starIcon text-white'/>

                </div>
                <div>Graphic Artist - Web Designer - Illustrator</div>
                
                
                
                </div>
            </div>
        </div>
      
      </section>
    </Fragment>
  )
}
