import React, { useState } from 'react'
import restaurant from '../assets/img/restaurnat.svg'
import { useFirebase } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'


const RestaurantRegistration = () => {

    const firebase = useFirebase()
    const navigate = useNavigate()

    const [restaurantData, setRestaurantData] = useState(
        {
            name: '',
            address: '',
            city: '',
            state: '',
            contact: '',
            email: '',
            country: '',
            role: 'restaurant',
            password: '',
        }
    )

    const [logo, setLogo] = useState(null);

    const handleChange = (e) => {
        setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.addRestaurant(restaurantData.email, restaurantData.password, restaurantData.name, restaurantData.address, restaurantData.city, restaurantData.state, restaurantData.country, restaurantData.contact, restaurantData.role, logo).then(() => {
            toast.success('Restaurant registered successfully')
        }).then(() => navigate('/login')).catch((error) => toast.error('Error registering' + error.message))
    }

    return (
        <div className='flex w-full p-10 '>
            <div className='w-1/2'>
                <img className='w-[84%] ' alt='restaurnat' src={restaurant} />
            </div>
            <div className='mt-14 w-1/2 rounded-xl'>
                <h1 className='font-extralight text-2xl mb-5'>RESTAURANT!</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-10'>
                        <div className='flex flex-col w-1/2'>
                            <label>Name<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b border-b-primaryBlue' type="text" name="name" placeholder='Enter Restaurant Name' onChange={handleChange} value={restaurantData.name} required />
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
                    <div className='flex gap-10 mt-8'>
                        <div className='flex flex-col w-1/2'>
                            <label>Country<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="country" placeholder='Enter Country' onChange={handleChange} value={restaurantData.country} required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Contact<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="contact" placeholder='Enter Contact' onChange={handleChange} value={restaurantData.contact} required />
                        </div>
                    </div>

                    <div className='flex  gap-10 mt-8'>
                        <div className='flex flex-col w-1/2'>
                            <label>Email<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b border-b-primaryBlue' type="email" name="email" placeholder='Enter Email' onChange={handleChange} value={restaurantData.email} required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label>Password<sup className='text-red-600'>*</sup></label>
                            <input className='outline-none border-b  border-b-primaryBlue' type="text" name="password" placeholder='Enter Password' onChange={handleChange} value={restaurantData.password} required />
                            <input className='invisible' type="text" name="role" defaultValue={restaurantData.role} />
                        </div>
                    </div>
                    <div className='flex gap-10 mt-2'>
                        <div className='flex flex-col w-1/2'>
                            <label>Upload Logo<sup className='text-red-600'>*</sup></label>
                            <input className='file:bg-white file:border-none file:p-0 border-b border-b-primaryBlue file:text-secondaryBlue file:pr-5 hover:file:cursor-pointer' type="file" accept="image/*" name="logo" onChange={(e) => setLogo(e.target.files[0])} required />
                        </div>
                        <div className='w-1/2'>
                            <button className='mt-3 w-full bg-Orange h-10 text-white font-bold rounded-sm' type='submit'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default RestaurantRegistration;