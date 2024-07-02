import React, { useState } from 'react'
import food from '../assets/img/food.svg'

const SignUp = () => {


  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    password: '',
    role: 'user',
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  }


  return (
    <div className='flex justify-center w-full p-10 pr-14'>
      <div className='flex gap-5 w-full mt-10'>
        <div className='w-1/2'>
          <img className='w-full' src={food} alt="food" />
        </div>
        <form onSubmit={handleSubmit} className='w-1/2'>
          <h1 className='font-extralight text-2xl mb-5'>SIGNUP!</h1>
          <div className='flex gap-10'>
            <div className='flex flex-col w-1/2'>
              <label>First Name<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='firstname' placeholder="Enter First Name" onChange={handleInputChange}  value={userData.firstname} required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label>Last Name<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='lastname' placeholder="Enter Last Name" onChange={handleInputChange}  value={userData.lastname} required />
            </div>
          </div>
          <div className='flex gap-10 mt-8'>
            <div className='flex flex-col w-1/2'>
              <label>Address<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='address' placeholder="Enter Address" onChange={handleInputChange}  value={userData.address} required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label>City<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='city' placeholder="Enter City" onChange={handleInputChange}  value={userData.city} required />
            </div>
          </div>
          <div className='flex gap-10 mt-8'>
            <div className='flex flex-col w-1/2'>
              <label>Pincode<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='pincode' placeholder="Enter Pincode" onChange={handleInputChange}  value={userData.pincode} required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label>Country<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='country' placeholder="Enter Country" onChange={handleInputChange}  value={userData.country} required />
            </div>
          </div>
          <div className='flex gap-10 mt-8'>
            <div className='flex flex-col w-1/2'>
              <label>Contact<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='contact' placeholder="Enter Contact" onChange={handleInputChange}  value={userData.contact} required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label>Email<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="email" name='email' placeholder="Enter Email" onChange={handleInputChange}  value={userData.email} required />
            </div>
          </div>
          <div className='flex gap-10 mt-8'>
            <div className='flex flex-col w-1/2'>
              <label>Password<sup className='text-red-600'>*</sup></label>
              <input className='outline-none border-b  border-b-Orange' type="text" name='password' placeholder="Enter Password" onChange={handleInputChange}  value={userData.password} required />
              <input className='invisible' type="text" name='role' placeholder="Enter Role"  defaultValue={userData.role} readOnly/>
            </div>
            <div className='flex flex-col w-1/2'>
              <button className='mt-3 w-full bg-primaryBlue h-10 text-white font-bold rounded-sm' type='submit'>Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp