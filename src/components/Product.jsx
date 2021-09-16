import React from 'react'
import "../styles/Product.scss"

const Product = ({title,image,
    amount, 
    discount,
    discountedamount}) => {
  return (
    <div className="product-info">
    <div className="product">
      <p>{title}</p>
      <p>{image}</p>
      <div className="amountdis">
        <p className="zz">$</p>
      <p className="y">{amount}</p>
      <p className="x">{discount}</p>
      </div>
      <div className="w">     
       <p className="w-z">$</p>
      <p className="w-y">{discountedamount}</p>
      </div>

    </div>
    </div>
  )
}

export default Product
