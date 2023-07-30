import React, { useState, useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice';
// import  moment from "moment"

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  
  const dispatch = useDispatch();

  useEffect(() => {
    getBlog();
  }, [])

  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };

  return (
    <>
        <Meta title={blogState?.title}/>
        <BreadCrumb title={blogState?.title} />
        <Container class1='blog-weapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                  <Link to="/blogs" className='d-flex align-items-center gap-10'> <HiOutlineArrowLeft className='fs-4'/> Go Back to Blogs</Link>
                  <h3 className='title'>
                    {blogState?.title}
                  </h3>
                  <img src={blogState?.images[0]?.url ? blogState?.images[0]?.url : '../images/blog-1.jpg'} className='img-fluid w-100 my-4' alt='blog' />
                  <p dangerouslySetInnerHTML={{ __html: blogState?.description, }}></p>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default SingleBlog
