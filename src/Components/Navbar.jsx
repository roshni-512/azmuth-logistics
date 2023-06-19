import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Fonts.css'
export default function Navbar() {
  return (
    <div style={{  backgroundColor:' #10265f',borderBottom:'2px solid grey',overflow:'hidden'}}>
    <div className="container">
      <div className="row ">
        <div className=" col-6  d-flex justify-content-between" id='logo'>
              <p className='mt-2 ' ><img src={"./images/Group 12.png"}  style={{ width: '100%', float: 'left' }}  alt='' /></p>
        </div>
        <div className=" col-6 mt-1  d-flex justify-content-end" >  
             
             <InstagramIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <LinkedInIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <WhatsAppIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <FacebookIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
       
             </div>
      </div>
       </div>
  </div>
  )
}
