import React, { useState } from 'react'
import restaurant from '../assets/img/restaurnat.svg'

const VendorRegistration = () => {

    const [restaurantData, setRestaurantData] = useState(
        {
            name: '',
            address: '',
            city: '',
            state: '',
            phone: '',
            email: '',
            logo: '',
            role: 'restaurant',
            password: '',
        }
    )

    const handleChange = (e) => {
        setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Save the data to the database
        console.log(restaurantData)
    }

    return (
        <div className='flex justify-center h-screen'>
            <img className='h-[90%]' alt='restaurnat' src={restaurant} />
            <div className=' mt-14 w-[50%] h-[70%] rounded-xl  p-5'>
                <h1 className='font-extralight text-2xl mb-5'>RESTAURANT!</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-10'>
                        <div className='flex flex-col w-1/2'>
                            <label>Name<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b border-b-primaryBlue' type="text" name="name" placeholder='Enter Hotel Name' onChange={handleChange} value={restaurantData.name} required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Address<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="address" placeholder='Street Address' onChange={handleChange} value={restaurantData.address} required />
                        </div>
                    </div>
                    <div className='flex gap-10 mt-8'>
                        <div className='flex flex-col w-1/2'>
                            <label>City<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b border-b-primaryBlue' type="text" name="city" placeholder='Enter City' onChange={handleChange} value={restaurantData.city} required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>State<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="state" placeholder='Enter State' onChange={handleChange} value={restaurantData.state} required />
                        </div>
                    </div>
                    <div className='flex flex-col w-full mt-8'>
                        <label>Country<sup className='text-red-600'>*</sup></label>
                        <input className='outline-none border-b  border-b-primaryBlue' type="text" name="country" placeholder='Enter Country' onChange={handleChange} value={restaurantData.country} required />
                    </div>

                    <div className='flex gap-10 mt-8'>
                        <div className='flex flex-col w-1/2'>
                            <label>Email<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b border-b-primaryBlue' type="email" name="email" placeholder='Enter email' onChange={handleChange} value={restaurantData.email} required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Contact<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="contact" placeholder='Enter contact' onChange={handleChange} value={restaurantData.contact} required />
                            <input className='invisible' type="text" name="role" placeholder='Enter role' onChange={handleChange} value={restaurantData.role} />
                        </div>
                    </div>
                    <div className='flex gap-10 mt-8'>
                        <div className='flex flex-col w-1/2'>
                            <label>Upload Logo<sup className='text-red-600'>*</sup></label>
                            <input className='file:bg-white file:border-none file:p-0 border-b border-b-primaryBlue file:text-secondaryBlue file:pr-5 hover:file:cursor-pointer' type="file" accept="image/*" name="logo" onChange={handleChange} value={restaurantData.logo} required />
                        </div>
                        <div className='w-1/2'>
                            <button className='mt-3 w-full bg-Orange h-10 text-white font-bold rounded-sm' type='submit'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VendorRegistration;