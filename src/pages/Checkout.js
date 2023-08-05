import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from "formik"
import * as yup from "yup"
import { createAnOrder, deleteUserCart, resetState } from '../features/user/userSlice'
import axios from 'axios'
import { config } from '../utils/axiosconfig'


let shippingSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Address Details are required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    pincode: yup.number().required("ZIP Code is required"),
  });

const Checkout = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            other: "",
        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            localStorage.setItem("address", JSON.stringify(values));
            setTimeout(() =>{
                checkOutHandler();
            }, 1000)
        },
    })   
      
    const dispatch = useDispatch(); 
    const cartState = useSelector((state) => state.auth.cartProducts);
    const authState = useSelector((state) => state.auth);
    const [totalAmount, setTotalAmount] = useState(null);
    const [cartProductState, setCartProductState] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index].quantity) * cartState[index].price);
            setTotalAmount(sum);
        }
    }, [cartState])

    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;
    // console.log(getTokenFromLocalStorage);
    const config2 = {
        headers: {
        Authorization: `Bearer ${
            getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
        }`,
        Accept: "application/json",
        },
    };

    useEffect(() => {
        if(authState?.orderedProduct?.order !== null && authState?.orderedProduct?.success === true) {
            navigate("/my-orders");
            setTimeout(() => {
                window.location.reload();
            }, 10)
        }
    }, [authState])

    useEffect(() => {
        let items=[];
        for (let index = 0; index < cartState?.length; index++) {
            items.push({product: cartState[index]?.productId?._id, quantity: cartState[index]?.quantity, color: cartState[index]?.color._id, price:cartState[index]?.price })   
        }
        setCartProductState(items);
    }, [cartState]);

    const loadScript = (src) => {
        try {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                    resolve(true);
                }
                script.onerror = () => {
                    resolve(false);
                }
                document.body.appendChild(script);
            })
        } catch (e) {
            console.log(e);
        }
    }

    const checkOutHandler = async () => {
        try {
            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
            if(!res) {
                alert("Razorpay SDK failed to Load");
                return;
            }

            const result = await axios.post("http://localhost:7000/api/user/order/checkout", {amount: totalAmount + 5}, config);
            if (!result) {
                alert("Something Went Wrong")
                return;
            }

            const {amount, id: order_id, currency} = result.data.order;
            const options = {
                key: "rzp_test_AoF6MsLeiOn46m", // Enter the Key ID generated from the Dashboard
                amount: amount,
                currency: currency,
                name: "Dev Corp.",
                description: "Test Transaction",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                    };

                    const result = await axios.post("http://localhost:7000/api/user/order/paymentVerification", data, config);

                    dispatch(createAnOrder({totalPrice: totalAmount, totalPriceAfterDiscount: totalAmount, orderItems:cartProductState, paymentInfo:result.data, shippingInfo: JSON.parse(localStorage.getItem("address"))})) 
                    dispatch(deleteUserCart(config2));
                    localStorage.removeItem("address");
                    dispatch(resetState());
                },
                prefill: {
                    name: "Dev Corner",
                    email: "devcorner@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Developer's Corner Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <>
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>DevCorner</h3>
                        <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className='text-dark total-price' to="/cart">Cart</Link></li> &nbsp; /
                            <li className="breadcrumb-item active total-price" aria-current="page">Information</li> &nbsp; /
                            <li className="breadcrumb-item active total-price">Shipping</li> &nbsp; /
                            <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                        </ol>
                        </nav>
                        <h4 className='title total'>
                            Contact Information
                        </h4>
                        <p className='user-details total'>Alex Tan (alex.tan@rutgers.edu) </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form className='d-flex gap-15 flex-wrap justify-content-between' onSubmit={formik.handleSubmit} action=''>
                            <div className='w-100'>
                                <select name='country' value={formik.values.country} onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")} className='form-control form-select' id=''>
                                    <option value="" selected disabled>Select Country</option>
                                    <option value="India" selected>India</option>
                                    <option value="Russia" selected>Russia</option>
                                    <option value="France" selected>France</option>
                                    <option value="Germany" selected>Germany</option>
                                    <option value="United States" selected>United States</option>
                                    <option value="Great Britain" selected>Great Britain</option>
                                </select>
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.country && formik.errors.country
                                    }
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' value={formik.values.firstName} onChange={formik.handleChange("firstName")} onBlur={formik.handleBlur("firstName")}  placeholder='Last Name' className='form-control' />
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.firstName && formik.errors.firstName
                                    }
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' value={formik.values.lastName} onChange={formik.handleChange("lastName")} onBlur={formik.handleBlur("lastName")}  placeholder='First Name' className='form-control' />
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.lastName && formik.errors.lastName
                                    }
                                </div>
                            </div>
                            
                            <div className='w-100'>
                                <input type='text' value={formik.values.address} onChange={formik.handleChange("address")} onBlur={formik.handleBlur("address")}  placeholder='Address' className='form-control' />
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.address && formik.errors.address
                                    }
                                </div>
                            </div>
                            <div className='w-100'>
                                <input type='text' value={formik.values.other} onChange={formik.handleChange("other")} onBlur={formik.handleBlur("other")} placeholder='Apartment, suite, etc. (Optional)' className='form-control' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' value={formik.values.city} onChange={formik.handleChange("city")} onBlur={formik.handleBlur("city")}  placeholder='City' className='form-control' />
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.city && formik.errors.city
                                    }
                                </div>
                            </div>
                            
                            <div className='flex-grow-1'>
                                <select value={formik.values.state} onChange={formik.handleChange("state")} onBlur={formik.handleBlur("state")} name='state' className='form-control form-select' id=''>
                                    <option value="" selected disabled>Select State</option>
                                    <option value="Arizona" selected>Arizona</option>
                                    <option value="Hawaii" selected>Hawaii</option>
                                </select>
                                <div className='error ms-2 my-1'>
                                    {
                                        formik.touched.state && formik.errors.state
                                    }
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                            <input type='text' value={formik.values.pincode} onChange={formik.handleChange("pincode")} onBlur={formik.handleBlur("pincode")}  placeholder='ZIP Code' className='form-control' />
                            <div className='error ms-2 my-1'>
                                {
                                    formik.touched.pincode && formik.errors.pincode
                                }
                            </div>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/cart" className='text-dark'><BiArrowBack className='me-2'/>Return to Cart</Link>
                                    <Link to="/shipping" className='button'>Continue to Shipping</Link>
                                    <button className='button' type="submit">Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        {
                            cartState && cartState?.map((item, index) => {
                                return (
                                    <div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                                        <div className='w-75 d-flex gap-10'>
                                            <div className='w-25 position-relative'>
                                                <span style={{ "top": "-10px", "right": "2px"}} className='badge bg-secondary text-while rounded-circle p-2 position-absolute'>
                                                    {item?.quantity}
                                                </span>
                                                <img width={100} height={100} src={item?.productId?.images[0]?.url} alt='' />
                                            </div>
                                            <div>
                                                <h5 className='total-price'>{item?.productId?.title}</h5>
                                                <p className='total-price'>{item?.color?.title}</p>
                                            </div>
                                        </div>
                                        <div className='flex-grow-1'>
                                            <h5 className='total'>$ {item?.price * item?.quantity}</h5>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>$ {totalAmount ? totalAmount + ".00": "0"}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ {totalAmount ? "5.00" : "0.00"}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center py-4 '>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ {totalAmount ? totalAmount + 5 + ".00": "0"}</h5>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout
