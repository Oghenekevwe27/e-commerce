import React from 'react'
import { FaBasketballBall } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
  const [{ basket }] = useStateValue();
  
  
  
  
  
  return (
<header className="container">
    <div className="main">
        <div className="main-wrap">
            <div className="head">
                <select className="head-language">
                    <option >En</option>
                     <option >Hausa</option>
                </select>
                 <select className="head-currency" >
                      <option >USD</option>
                     <option >NGN</option>
                 </select>
         </div>
         <div className="head-second">
                <div className="profile">
                <img src="/image/profile_close_2.png" alt="src" className="head-image" />
                 <p>My profile</p>
                </div>
                <div className="cart">
                <button type="button" class="btn btn-light position-relative">

<img src="/image/vector.png" alt="src" className="head-image sec" />
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  border border-light rounded-circle">
  {basket?.length}
  <span class="visually-hidden">unread messages</span>
</span>
</button>
                {/* <img src="/image/vector.png" alt="src" className="head-image sec" /> */}
               
                </div>
                <p  className="sec"> Items</p>
                <div className="trial">
                <p  className="sec">$0.00</p>
                <img src="/image/icons8-search-24.png" alt="src" className="head-image third" />
                </div>

                               
         </div>
     </div>

   <hr className="container-fluid"/>  
<nav className="navbar container">
    <ul className="nav">
         <li className="nav-item">
           <Link to="/" className="nav-link nav-words active" id="home">HOME </Link>
        </li>
        <li className="nav-item">
           <Link to="/" className="nav-link nav-words">BAGS</Link>
        </li>
        <li className="nav-item">
           <Link to="/" className="nav-link nav-words">SNEAKERS</Link>
        </li>
        <li className="nav-item">
           <Link to="/" className="nav-link nav-words">BELT</Link>
        </li> 
        <li className="nav-item">
           <Link to="/" className="nav-link nav-words">CONTACT</Link>
        </li>          




    </ul>
</nav>

 </div>


 
</header>
    
  )
}

export default Header
