import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import Color from "../components/Color"
import { Link } from 'react-router-dom'
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"

const SingleProduct = () => {
    const props = {width: 400, height: 600, zoomWidth: 600, img: "https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627"};
    const [ orderedProduct, setOrderedProduct ] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

  return (
    <>
        <Meta title={"Product Name"}/>
        <BreadCrumb title="Product Name" />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div><img src='https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627' className='img-fluid'/></div>
                                <div><img src='https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627' className='img-fluid'/></div>
                                <div><img src='https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627' className='img-fluid'/></div>
                                <div><img src='https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627' className='img-fluid'/></div>
                            </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Kid Headphones Bulk 10 Pack Multi Colored For Students</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$100</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                                </div>
                                <a className="review-btn" href='#review'>Write a Review</a>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3> 
                                    <p className='product-data'>Havells</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availability :</h3> 
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3> 
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3> 
                                    <Color />
                                </div>
                                <div className='d-flex gap-15 flex-row align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3> 
                                    <div className=''>
                                        <input type='number' name='' min={1} max={10} className='form-control' style={{"width":"70px"}} id="" />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>ADD TO CART</button> 
                                        <Link className='button signup' to="/signup">BUY IT NOW</Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=''><AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                    </div>
                                    <div>
                                        <a href=''><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns:</h3> 
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br />
                                        We ship all US domestic orders within <strong>5-10 business days!</strong>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link:</h3> 
                                    <p className='product-data'>
                                        <a href='javascript:void(0);' onClick={ () => {
                                            copyToClipboard("https://www.watches.com/cdn/shop/products/xeric-scrambler-rose-gold-ocean-2_1800x.jpg?v=1683578627");
                                            }}
                                        >Copy Product Link</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi tristique senectus et netus et. Et ultrices neque ornare aenean euismod elementum nisi quis. Nullam ac tortor vitae purus faucibus. Quam nulla porttitor massa id neque aliquam vestibulum. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Luctus accumsan tortor posuere ac ut consequat semper viverra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Proin sed libero enim sed. Orci ac auctor augue mauris augue neque gravida in fermentum. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Sociis natoque penatibus et magnis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id="review">Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (<div>
                                    <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                </div>)}
                            </div>
                            <div className='review-form py-4'>
                                <h4 className='mb-2'>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars count={5} size={24} value={1} edit={true} activeColor="#ffd700" />
                                    </div>
                                    <div>
                                    <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comments'/>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>John A.</h6>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Vivamus at augue eget arcu dictum varius duis at consectetur. Massa sed elementum tempus egestas sed. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Massa sed elementum tempus egestas sed. Volutpat sed cras ornare arcu dui vivamus arcu. Adipiscing diam donec adipiscing tristique risus nec. Nec ultrices dui sapien eget mi proin sed libero enim. Ullamcorper sit amet risus nullam eget felis eget nunc. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Laoreet id donec ultrices tincidunt arcu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                </div>
            </div>
        </section>  
    </>
  )
}

export default SingleProduct
