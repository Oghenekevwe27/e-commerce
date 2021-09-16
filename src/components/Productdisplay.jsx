import React from 'react'
import "../styles/Productdisplay.scss"

const Productdisplay = ({title,image,
    amount, 
    discount,
    discountedamount,rating}) => {
  return (
    <div className="productpage">
      <div className="product-i">
        <div className="product-2">
          <p className='product-imagee' >{image}</p>
          <div className="product-content">
            <p className="product-title">{title}</p>
            <div className="product-rating">
              {
                      Array(rating)
                      .fill()
                      .map((_)=>(
                          <img className="rating-star" src="/image/star.png" alt=""  />
                      ))
                  }
              </div>
              <div className="amount">
                   <div className="c2">     
                       <p className="c-a2">$</p>
                      <p className="c-b2">{discountedamount}</p>
                    </div>
              
                <div className="amountdis2">
                    <div className="aaaa">
                      <p className="aa2">$</p>
                      <p className="a2">{amount}</p>
                  </div>
                    <p className="b2">{discount}</p>


                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Productdisplay
