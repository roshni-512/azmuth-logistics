import React from 'react'
import './Fonts.css'
export default function TextComponent() {
  return (
    
      <div style={{overflow:'hidden',width:'100%'}}>
   <div className="container" >
    <div className="row">
    <div className="col-xl-12 col-md-5 mt-5 mb-5" data-aos="fade-up" >
        <div>
        <p className='text-center pt-5 'style={{fontFamily:'Poppins',fontWeight:700,fontSize:'82.5px',lineHeight:'90px',color:'#10265f'}}>Our Vision</p>
        <p className='text-center pt-3'style={{fontFamily:'Poppins',fontStyle:'light',fontWeight:300 ,fontSize:'35px',lineHeight:'40.3px',letterSpacing:'2%',color:'grey',verticalAlign:'top'}}>“At its core, Azmuth stands for innovation. Azmuth came to life to create a world where complexities of shipping and delivery are transformed into effortless and delightful experiences. We strive to bring convenience and create unparalleled value for our customers.”</p>
        </div>
    </div>
    
    </div>
    </div>
   </div>
  )
}
