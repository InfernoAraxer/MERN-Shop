import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
import wishlist from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch1 from "../images/watch-1.jpg"
import compare from "../images/prodcompare.svg"
import view from "../images/view.svg"
import addcart from "../images/add-cart.svg"

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to="/product/:id" className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <Link><img src={wishlist} alt='wishlist' /></Link>
          </div>
          <div className='product-image'>
              <img src={watch} className="img-fluid" alt='product image' />
              <img src={watch1} className="img-fluid" alt='product image' />
          </div>
          <div className='product-details'>
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
              <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat ac.</p>
              <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                  <Link><img src={compare} alt='compare' /></Link>
                  <Link><img src={view} alt='view' /></Link>
                  <Link><img src={addcart} alt='addcart' /></Link>
              </div>
          </div>
        </Link>
      </div>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to="/product/:id" className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <Link><img src={wishlist} alt='wishlist' /></Link>
          </div>
          <div className='product-image'>
              <img src={watch} className="img-fluid" alt='product image' />
              <img src={watch1} className="img-fluid" alt='product image' />
          </div>
          <div className='product-details'>
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
              <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat ac.</p>
              <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                  <Link><img src={compare} alt='compare' /></Link>
                  <Link><img src={view} alt='view' /></Link>
                  <Link><img src={addcart} alt='addcart' /></Link>
              </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard
