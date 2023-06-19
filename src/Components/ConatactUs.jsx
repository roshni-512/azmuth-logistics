import React ,{useRef} from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';
import './Fonts.css'
import 'animate.css';
export default function ConatactUs() {
    var settings = {
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        speed: 1000,
        };
      const sliderRef= useRef(null)
      console.log(sliderRef.current)
      
  return (
    <div style={{overflow:'hidden'}}>
      <div className="container">
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-5 p-2"data-aos="fade-right"
      >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "80px",
                lineHeight: "90px",
                marginTop:'35px',
                color:'#10265f'
              }}
            >
              Our Products
            </p>
            <Slider {...settings} ref={sliderRef}>
   
 
 <div className=''>
  <div className="p-3" style={{border:'1px solid #cfcfcf',borderRadius:'5px',width:'100%',height:'350px'}}>
    <div className="col-12">
    <JoinInnerOutlinedIcon style={{ width: '50px',height:'50px',borderRadius:'9px', float: 'left',backgroundColor:'#10265f',color:'white'}}  alt=''className="p-2"/>
   
    </div>

    <div className="col-12"style={{float:'left'}}>
    <div  style={{float:'left'}}>
    <spam className=''style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'90px',color:'#10265f'}}>Doket - B2B</spam>
    <p className=''style={{fontFamily:'Poppins',fontSize:'16px',lineHeight:'33px',fontWeight:300, letterSpacing:'2%'}}>Your very own transport management system, a digital solution to everyday logistic operations.</p>
    <span className='mb-3 mt-3'style={{color:'#10265f',lineHeight:'25.7px',fontSize:'15px'}}><div class="row" style={{display:'flex'}}>
  <div class="col-6">
    <li>First Mile</li>
    <li>Mid Mile</li>
    <li>Last Mile</li>
  </div> <div class="col-6">
    <li>Hyperlocal</li>
    <li>RTO</li>
    <li>RVP</li>
  </div></div></span>
    </div>
    </div>
  </div>
 </div>
 <div className=''>
  <div className="p-3" style={{border:'1px solid #cfcfcf',borderRadius:'5px',width:'100%',height:'350px'}}>
    <div className="col-12">
    <JoinInnerOutlinedIcon style={{ width: '50px',height:'50px',borderRadius:'9px', float: 'left',backgroundColor:'#10265f',color:'white'}}  alt=''className="p-2"/>
   
    </div>
    <div className="col-12" style={{float:'left'}}>
    <p className='pt-3'style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'200%',color:'#10265f'}}>Doket - B2B</p>
    </div>
    <div className="col-12"style={{float:'left'}}>
    <li style={{fontFamily:'Poppins',fontWeight:400,fontSize:'20px',lineHeight:'33px',letterSpacing:'2%'}}>Courier Aggregator</li>
    <li style={{fontFamily:'Poppins',fontWeight:400,fontSize:'20px',lineHeight:'33px',letterSpacing:'2%'}}>Smart Courier Selection</li>
    </div>
  </div>
 </div>
 <div>
 <div>
  <div className="p-3" style={{border:'1px solid #cfcfcf',borderRadius:'5px',width:'100%',height:'350px'}}>
    <div className="col-12">
    <JoinInnerOutlinedIcon style={{ width: '50px',height:'50px',borderRadius:'9px', float: 'left',backgroundColor:'#10265f',color:'white'}}  alt=''className="p-2"/>
   
    </div>
    <div className="col-12" style={{float:'left'}}>
    <p className='pt-3'style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'200%',color:'#10265f'}}>Coming Soon - WMS</p>
    </div>
    <div className="col-12"style={{float:'left'}}>
   <p style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'200%'}}>Wait around and we would soon be with you</p>
    </div>
  </div>
 </div>
 </div>
       </Slider>
        < div className="row">
        <div className="col-6 "> <ArrowBackIcon className="mt-1" style={{float:'left',fontSize:'40px'}} onClick={()=> sliderRef.current.slickPrev()}/></div>
        <div className="col-6"> 
        <ArrowForwardIcon className="mt-2" style={{float:'right',fontSize:'40px'}} onClick={()=> sliderRef.current.slickNext()}/>
        
        </div>
    
      
       
      
          </div>
            </div>
            <div className="col-12 col-md-5 p-4 mt-3 bimg"data-aos="fade-left">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "80px",
                color: "white",
                lineHeight: "90px",
               
               
              }}
            >
              Hello Us.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Your Name" />
              </Form.Group>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your email" />
                </Col>
                <Col>
                  <Form.Control placeholder="Your Phone" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your Company" />
                </Col>
                <Col>
                  <Form.Control placeholder="Your position/role" />
                </Col>
              </Row>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Drop a line"
                  style={{ height: "100px" }}
                  className="mt-3"
                />
              </Col>
              <Col>
                <Button
                  className="mt-3 mb-5"
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    height:'50px',
                    fontFamily:'Poppins'
                  }}
                >
                  Book a call
                </Button>
              </Col>
            </Form>
            </div>
        </div>
      </div>
    </div>
  )
}
