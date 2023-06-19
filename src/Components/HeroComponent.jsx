import React from 'react'
import './Fonts.css'
import { Button } from "react-bootstrap";

export default function HeroComponent() {
  return (
    <div className='bg' style={{overflowX:'hidden',width:'100%'}}>
       <div className="container">
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-5 " data-aos="slide-right">
             <div className='' style={{fontSize:'90px',color:'white',paddingTop:'70px',fontFamily:'Arbutus Slab'}}>Azmuth
             
             <p
              style={{
                lineHeight: "43.4px",
                paddingTop: "10px",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight:300,
                letterSpacing:'2%',
                color:'white',
                verticalAlign:'top',
                fontStyle:'regular',
                

              }}
              className="mt-3"
            >
             Streamline logistics effortlessly with our AI-powered software solutions. From pickup to doorstep delivery, we handle it all, ensuring a seamless and hassle-free process. Join us for a world of convenience, efficiency, and delightful customer experiences.
            </p>
            <Button
              variant="light"
              style={{ width: "60%", padding: "15px", border: "none" ,fontFamily:'Poppins'}}
              id="btn"
              className="mt-2 col-md-12"

            >
              Book a call
            </Button>
             
             </div>
            </div>
            <div className="col-12 col-md-5 mb-2 d-md-block d-xl-none order-first" data-aos="fade-down" >
            <img src={"./images/divimage1.png"} style={{ width: '100%' }}  alt='' />
            </div>
        </div>
       </div>
    </div>
  )
}
