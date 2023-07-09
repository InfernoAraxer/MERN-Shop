import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
            <img src={blog} className='img-fluid w-100' alt='blog'/>
        </div>
        <div className='blog-content'>
            <p className='date'>8 July, 2023</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <Link className="button" to="/blog/:id">Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard
