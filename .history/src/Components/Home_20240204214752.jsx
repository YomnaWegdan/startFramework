import React, { Fragment } from 'react'
import {img} from '../images/avataaars.svg'
export default function Home() {
  return (
    <Fragment>
      <section className='home vh-100'>
        <div className='container h-100'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-md-12'>
                <img src={img} className='w-100' alt='img'/>
                
                </div>
            </div>
        </div>
      
      </section>
    </Fragment>
  )
}
