import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { useDispatch } from 'react-redux';
import * as yup from "yup"
import { useFormik } from "formik"
import { createQuery } from '../features/contact/contactSlice'

let contactSchema = yup.object().shape({
  name: yup.string().required("Your Name is required"),
  email: yup.string().nullable().email("Email should be valid").required("Your email is required"),
  mobile: yup.string().default("").nullable().required("Your Phone Number is required"),
  comment: yup.string().default("").nullable().required("A comment is required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
        name: "",
        mobile: "",
        email: "",
        comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
        dispatch(createQuery(values));
    },
  })   
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'> 
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48533.72999423871!2d-74.4588939!3d40.5115748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c65518be06bf%3A0x51b42066917aaf48!2sRutgers%E2%80%93New%20Brunswick!5e0!3m2!1sen!2sus!4v1688849387361!5m2!1sen!2sus" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" title='maps' referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                  <input type='text' className='form-control' name='name' placeholder='Name' onChange={formik.handleChange("name")} onBlur={formik.handleBlur("name")} value={formik.values.name} />
                  <div className='error'>
                      {formik.touched.name && formik.errors.name}
                  </div>
                  <input type='email' className='form-control' name='email' placeholder='Email' onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} value={formik.values.email}/>
                  <div className='error'>
                      {formik.touched.email && formik.errors.email}
                  </div>
                  <input type='tel' className='form-control' name='mobile' placeholder='Mobile Number' onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")} value={formik.values.mobile}/>
                  <div className='error'>
                      {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comment' onChange={formik.handleChange("comment")} onBlur={formik.handleBlur("comment")} value={formik.values.comments}/>
                    <div className='error'>
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'>
                        Demo Store, No. 1259 Freedom, New York, 11111, United States
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href='tel:+1234567890'>+1234567890</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href='mailto:alex.tan@rutgers.edu'>alex.tan@rutgers.edu</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'> Monday - Friday, 10AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
