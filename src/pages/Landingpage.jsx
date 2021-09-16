import React from 'react'

import "../styles/Landingpage.scss"
import { Link } from 'react-router-dom'
import "../components/Product.jsx"
import Product from '../components/Product.jsx'
import Second from '../components/Second'
import Productdisplay from '../components/Productdisplay'
// import C:\Users\ADMIN\Desktop\urgent\client\src\image Product (1).png 

const landingpage = () => {
  return (<div className="hi">
    <div className="banner">
    <img  src="/image/Promotion Image.png" alt="" />
    <h1 className='banner1'>Super Flash Sale</h1> <br /> 
    <h1 className="banner2">50% Off</h1>
    <div className="home-row">   
     <Product
    title ='FS - QUILTED MAXI CROSS BAG'
    image ={<img  src="/image/Image(1).png" alt="" />}
    amount ={534.33}
    discount='24% Off'
    discountedamount= {299.43}/>
     <Product
    title ='FS - QUILTED MAXI CROSS BAG'
    image ={<img  src="/image/Image(1).png" alt="" />}
    amount ={534.33}
    discount='24% Off'
    discountedamount= {299.43}/>
     <Product
    title ='FS - QUILTED MAXI CROSS BAG'
    image ={<img  src="/image/Image(1).png" alt="" />}
    amount ={534.33}
    discount='24% Off'
    discountedamount= {299.43}/>
    
    </div>


    </div>
  <Second/>
  <div className="home-display">
  <Productdisplay  className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>


<Productdisplay   className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>
    
 <Productdisplay className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>

<Productdisplay  className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>
    </div>
    <div className="home-displayleft">
    <Productdisplay className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>
    <Productdisplay className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>
    <Productdisplay className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>
    <Productdisplay className="ppppp"
  image ={<img  src="/image/Image(1).png" alt="" style={{width: '290px'}} />}
    title ='FS - QUILTED MAXI CROSS BAG'
    rating={5}
    discountedamount= {299.43}
    amount ={534.33}
    discount='24% Off'/>

    </div>
    <div className="load">
      <Link className="load" to="/">Load more</Link>

    </div>
    <div className="shopnow">
      <div className="shopnowwords">
          <p  className="shopnowwords1" >Adidas Men Running</p>
         <p  className="shopnowwords2">Sneakers</p>
          <p>Performance and design. Taken right to the edge.</p>
         <Link className="shoplink">SHOP NOW</Link>
        </div>
    </div>

    





    
   

  </div>
      
  )
}

export default landingpage
