import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
       const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
       }
       try {
        await axios.post("https://getform.io/f/alllwdka", userInfo)
        toast.success("Your message has been send")
       } catch (error) {
        console.log(error)
        toast.error("Something Went wrong");
       }
        
    }

    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'></div>
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the form bellow to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
                    action="https://getform.io/f/alllwdka"
                    onSubmit={handleSubmit(onSubmit)}
                    method='POST'
                    >
                    <h1 className='text-xl font-semibold mb-4 '>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>

                        <label className='block text-gray-700' htmlFor="name">FullName</label>
                        <input {...register("name", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter your FullName'
                            name='name'
                            id='name'
                            type="text" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700' htmlFor="email">Email Address</label>
                        <input  {...register("email", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter your Email address'
                            name='email'
                            id='email'
                            type="text" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700' htmlFor="message">Message</label>
                        <textarea  {...register("message", { required: true })} className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter your Message'
                            name='message'
                            id='message'
                            type="text" />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black hover:bg-slate-700 text-white rounded-xl px-3 py-2'>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact
