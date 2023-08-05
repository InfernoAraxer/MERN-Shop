import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard.js'
import ProductCard from '../components/ProductCard.js'
import SpecialProduct from '../components/SpecialProduct.js'
import Container from '../components/Container.js';
import { services } from '../utils/Data.js'
import  moment from "moment"
import { getAllBlogs } from '../features/blogs/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice.js';
import ReactStars from "react-rating-stars-component"
import wishlist from "../images/wish.svg"
import watch1 from "../images/watch-1.jpg"
import compare from "../images/prodcompare.svg"
import view from "../images/view.svg"
import addcart from "../images/add-cart.svg"
import { addToWishlist } from '../features/products/productSlice';

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
    getProducts();
  }, [])

  const getBlogs = () => {
    dispatch(getAllBlogs());
  }

  const getProducts = () => {
    dispatch(getAllProducts());
  }

  const addToWish = (id) => {
    dispatch(addToWishlist(id))
  }

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt="main-banner" />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br/> or $64.62/mo.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br/> styles and colors.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $599.00 <br/> or $49.91/mo. for 12 mo.*</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>free engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br/> ultra-low distortion</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
      <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                {services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
      <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img className="categories-image" src='images/laptop.jpg' alt='Computers & Laptop' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img className="categories-image" src='images/camera.jpg' alt='Cameras' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img className="categories-image" src='images/tv.jpg' alt='Tvs' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smartwatches</h6>
                    <p>13 Items</p>
                  </div>
                  <img className="categories-image" src='images/watch.jpg' alt='watch' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img className="categories-image" src='images/homeapp.jpg' alt='Home Appliance' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>8 Items</p>
                  </div>
                  <img className="categories-image" src='images/speaker.jpg' alt='Speaker' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img className="categories-image" src='images/acc.jpg' alt='Accessory' />
                </div>

                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img className="categories-image" src='images/headphone.jpg' alt='headphone' />
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          {
          productState && productState?.map((item, index) => {
            if (item.tags === "featured") {
              return (
                <div className="col-3">
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                      <button className='border-0 bg-transparent' onClick={(e) => {addToWish(item?._id)}} ><img src={wishlist} alt='wishlist' /></button>
                  </div>
                  <div className='product-image'>
                      <img src={item?.images[0].url} className="img-fluid mx-auto" alt='product' width={160} />
                      <img src={watch1} className="img-fluid mx-auto" alt='product' width={160} />
                  </div>
                  <div className='product-details'>
                      <h6 className='brand'>{item?.brand}</h6>
                      <h5 className='product-title'>{item?.title}</h5>
                      <ReactStars count={5} size={24} value={item?.totalrating.toString()} edit={false} activeColor="#ffd700" />
                      {/* <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.description }} ></p> */}
                      <p className='price'>$ {item?.price}</p>
                  </div>
                  <div className='action-bar position-absolute'>
                      <div className='d-flex flex-column gap-15'>
                        {/* <button className='border-0 bg-transparent'><img src={compare} alt='compare' /></button> */}
                        <button className='border-0 bg-transparent'><img onClick={() => navigate("/product/"+ item?._id)} src={view} alt='view' /></button>
                        {/* <button className='border-0 bg-transparent'><img src={addcart} alt='addcart' /></button> */}
                      </div>
                  </div>
                  </div>
                </div>
              )
            }
          })
        }
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-01.webp' className="img-fluid" alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen </h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-02.webp' className="img-fluid" alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 ntis of brightness.</h6>
                <p className='text-dark'>27.5-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-03.webp' className="img-fluid" alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smartphones</h5>
                <h6 className='text-dark'>Smartphone 13 Pro</h6>
                <p className='text-dark'>Now in Green. From $999.00 for $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-04.webp' className="img-fluid" alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room-Filling Sound</h6>
                <p className='text-dark'>From $699.00 for $116.58/mo. for 12 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          {
            productState && productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct key={index} id={item?._id} title={item?.title} brand={item?.brand} totalrating={item?.totalrating.toString()} price={item?.price} sold={item?.sold} quantity={item?.quantity} />
                )
              }
            })
          }
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
        {
          productState && productState?.map((item, index) => {
            if (item.tags === "popular") {
              return (
                <div className="col-3">
                  <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                      <button className='border-0 bg-transparent' onClick={(e) => {addToWish(item?._id)}} ><img src={wishlist} alt='wishlist' /></button>
                  </div>
                  <div className='product-image'>
                      <img src={item?.images[0].url} className="img-fluid mx-auto" alt='product' width={160} />
                      <img src={watch1} className="img-fluid mx-auto" alt='product' width={160} />
                  </div>
                  <div className='product-details'>
                      <h6 className='brand'>{item?.brand}</h6>
                      <h5 className='product-title'>{item?.title}</h5>
                      <ReactStars count={5} size={24} value={item?.totalrating.toString()} edit={false} activeColor="#ffd700" />
                      {/* <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.description }} ></p> */}
                      <p className='price'>$ {item?.price}</p>
                  </div>
                  <div className='action-bar position-absolute'>
                      <div className='d-flex flex-column gap-15'>
                        {/* <button className='border-0 bg-transparent'><img src={compare} alt='compare' /></button> */}
                        <button className='border-0 bg-transparent'><img onClick={() => navigate("/product/"+ item?._id)} src={view} alt='view' /></button>
                        {/* <button className='border-0 bg-transparent'><img src={addcart} alt='addcart' /></button> */}
                      </div>
                  </div>
                  </div>
                </div>
              )
            }
          })
        }
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className="d-flex ">
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          {
            blogState && blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div key={index} className='col-3'>
                    <BlogCard id={item?._id} title={item?.title} description={item?.description} image={item?.images[0]?.url} date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm:ss a")} />
                  </div>
                )
              }
          }) 
          }
        </div>
      </Container>
    </>
  )
}

export default Home
