import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"}/>
        <BreadCrumb title="Dynamic Blog Name" />
        <div className='blog-weapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='single-blog-card'>
                    <Link to="/blogs" className='d-flex align-items-center gap-10'> <HiOutlineArrowLeft className='fs-4'/> Go Back to Blogs</Link>
                    <h3 className='title'>
                        Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src='../images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat. Fermentum posuere urna nec tincidunt praesent semper. Ac tincidunt vitae semper quis lectus nulla. Vitae proin sagittis nisl rhoncus mattis. Scelerisque felis imperdiet proin fermentum. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. In aliquam sem fringilla ut morbi tincidunt. Morbi tristique senectus et netus et malesuada fames. Rhoncus mattis rhoncus urna neque viverra justo. Volutpat ac tincidunt vitae semper quis lectus nulla. Porttitor eget dolor morbi non arcu risus quis varius. Semper eget duis at tellus at urna condimentum mattis. Ut lectus arcu bibendum at varius. Cursus in hac habitasse platea dictumst quisque sagittis purus. Orci eu lobortis elementum nibh tellus molestie nunc. Consequat mauris nunc congue nisi vitae suscipit. Dignissim convallis aenean et tortor at. Ultricies mi eget mauris pharetra et.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleBlog
