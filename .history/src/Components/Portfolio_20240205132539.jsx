import React, { Fragment, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'


export default function Portfolio() {
    const [image , setImage] = useState([img1 , img2 , img3])
    const 
  return (
    <Fragment>
    <section className='portfolio vh-100 '>
        <div className='container h-100'>
            <div className='row h-100 align-items-center justify-content-center align-content-center'>
                <div className='col-md-12'>
                    <h2>PORTFOLIO COMPONENT</h2>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <div className='line text-bg-dark'></div>
                        <FaStar className=' mx-2 '/>
                        <div className='line text-bg-dark'></div>
                    </div>
                </div>

                {image.map((img)=>                 
                    <div className='col-lg-4 col-md-6'>  
                        <img src={img} className='w-100' alt='lol'/>             
                    </div>
                    )}
                </div>
        </div>
    </section>
    </Fragment>
  )
}
