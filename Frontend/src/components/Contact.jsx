import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <div className='flex h-screen items-center justify-center'>
                    <div className="w-[600px]">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            {/* <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my-modal-3").close()}
                            >✕</Link> */}
                            
                            <h3 className="font-bold text-lg">Contact Us</h3>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter Your Name' 
                                className='w-96 px-3 py-1 border rounded-md outline-none'
                                {...register("name", { required: true })} 
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500 font-semibold'>This field is required</span>}
                            </div>
                            {/* login */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter Your Email' 
                                className='w-96 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500 font-semibold'>This field is required</span>}
                            </div>
                            {/* message */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea type="text" placeholder='Type Your Message...' 
                                className='w-96 px-3 py-1 border rounded-md outline-none'
                                rows="4"
                                {...register("message", { required: true })}
                                />
                                <br />
                                {errors.message && <span className='text-sm text-red-500 font-semibold'>This field is required</span>}
                            </div>
                            {/* button */}
                            <div className='flex justify-around mt-6'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Send Message</button>
                                
                            </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contact
