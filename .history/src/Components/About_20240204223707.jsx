import React, { Fragment } from 'react'

export default function About() {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>ABOUT COMPONENT</h2>
            <div className='d-flex justify-content-center align-items-center my-3'>
                    <div className='line'></div>
                    <FaStar className=' mx-2 '/>
                    <div className='line'></div>
                </div>
            <p></p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
