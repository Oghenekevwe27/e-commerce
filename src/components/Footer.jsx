
    import React from 'react'
    import { Link } from 'react-router-dom'
    
    const footer = () => {
      return (
        <div>
            <footer className="">
    <div className="container footer footcon" >
      <div className="footerwrap">
      <div className="row g-1 ">
         <div className="col-md-2 ">
            <div className="footer-logo">
                <div className="footer-brand">
                     <img src="/image/Vector 40 (Stroke).svg" alt="" />

                 </div>
                    <div className="nav-words2 footer-title">
                     E-Comm  
                    </div>
         </div>
        
                <div className="footer-first">
                    <p className="footer-p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                    </p>
                </div>
        
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
            <div className=" footer-social">
           <h5 className="footer-heading">Follow Usf</h5>
           <p className="footer-p">
           Since the 1500s, when an unknown printer took a galley of type and scrambled. 
           </p>
            </div>
            <div className="social-icons">
                <img src="/image/facebook (1).svg" alt="" className="social-fb " />
                <img src="/image/twitter (1).svg" alt="" className="social-twitter " />
            </div>
            
            </div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
        <div className=" footer-social">
           <h5 className="footer-heading">Contact Us</h5>
           <p className="footer-p">
           E-Comm , 4578 Marmora Road, Glasgow D04 89GR
           </p>
            </div>
          


        </div>
        <div className="col-md-2"></div>
      </div>

      </div>
      <div className="container mt-4">
        <div className="row g-1">
            <div className="col-md-2">
            
            <div className=" footer-social">
           <h5 className="footer-heading">Infomation</h5>
           <p className="footer-p footer-info">
                 <Link to="/">  About Us</Link> 
                 <Link to="/">  Infomation </Link> 
                 <Link to="/">  Privacy Policy</Link> 
                 <Link to="/">  Terms & Conditions</Link> 
                               
           </p>
            </div>
            </div>
            <div className="col-md-2">
            <div className=" footer-social">
           <h5 className="footer-heading">Service</h5>
          
           <p className="footer-p footer-info">
                 <Link to="/">  About Us</Link> 
                 <Link to="/">  Infomation </Link> 
                 <Link to="/">  Privacy Policy</Link> 
                 <Link to="/">  Terms & Conditions</Link> 
                               
           </p>
            </div></div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
            <div className=" footer-social">
           <h5 className="footer-heading">My Account</h5>
         
           <p className="footer-p footer-info">
                 <Link to="/">  About Us</Link> 
                 <Link to="/">  Infomation </Link> 
                 <Link to="/">  Privacy Policy</Link> 
                 <Link to="/">  Terms & Conditions</Link> 
                               
           </p>
            </div>


                
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
            <div className=" footer-social">
           <h5 className="footer-heading">Our Offers</h5>
        
           <p className="footer-p footer-info">
                 <Link to="/">  About Us</Link> 
                 <Link to="/">  Infomation </Link> 
                 <Link to="/">  Privacy Policy</Link> 
                 <Link to="/">  Terms & Conditions</Link> 
                               
           </p>
            </div>



            </div>
        </div>
    </div>



<hr />



    </div>




    

    </footer>
        </div>
      )
    }
    
    export default footer
    