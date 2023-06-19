import React from 'react'
import './Fonts.css'
export default function StoryBehind() {
  return (
    <div style={{overflowX:'hidden'}}>
    <div className='container my-4 ' >
        <div className='row d-flex justify-content-between' >
        <div className='col-12 col-md-6 mt-5 mb-5'data-aos="fade-right">
                <img src={"./images/bgcontact.png"} style={{ width: '100%', float: 'right' }}  alt='' />
            </div>
            <div className='col-12 col-md-6 ps-sm-5' 
     style={{display:'fllex', alignSelf:'center',padding:'10px'}} data-aos="fade-left">
        <strong style={{fontFamily:'Poppins',fontWeight:900,fontSize:'82px',lineHeight:'90px',color:'#10265f' }} className='mt-5 mb-5'>Story behind <br></br>Azmuth</strong>
        <p style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'26px',lineHeight:'43.4px',letterSpacing:'2%',verticalAlign:'top',alignContent:'left'}} className='my-4'>Streamline logistics effortlessly with our AI-powered software solutions. From pickup to doorstep delivery, we handle it all, ensuring a seamless and hassle-free process. Join us for a world of convenience, efficiency, and delightful customer experiences.</p>
        
        </div>
          
        </div>
    </div>
</div>
  )
}
