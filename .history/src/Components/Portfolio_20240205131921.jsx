import React, { Fragment } from 'react'
import { FaStar } from "react-icons/fa6";

export default function Portfolio() {
    const [image , setImage] = useS
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

                <div className='col-lg-4 col-md-6'>
                </div>

            </div>
        </div>
    </section>
    </Fragment>
  )
}
