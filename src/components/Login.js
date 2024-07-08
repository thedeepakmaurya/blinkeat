import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../utils/Firebase';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {

    const firebase = useFirebase()
    const navigate = useNavigate()

    const [userData, setUserData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signIn(userData.email, userData.password).then(() => {
            toast.success('Logged in successfully!')
        }).catch((error) => toast.error('Failed to login' + error.message))
    }

    useEffect(() => {
        switch (firebase.role) {
            case 'restaurant':
                navigate('/restaurant-info')
                break;
            case 'user':
                navigate('/')
                break;
            default:
        }
    }, [firebase.role, navigate])


    return (
        <div className='flex flex-col  items-center w-full'>
            <div className='w-[30%] mt-40'>
                <h1 className='font-extralight text-2xl mb-5'>LOGIN!</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label>Email<sup className='text-red-600'>*</sup></label>
                    <input className='outline-none border-b  border-b-primaryBlue' type="email" name='email' placeholder="Enter Email" onChange={handleChange} value={userData.email} required />
                    <label className='mt-5'>Password<sup className='text-red-600'>*</sup></label>
                    <input className='outline-none border-b  border-b-primaryBlue' type="password" name='password' placeholder="Enter Password" onChange={handleChange} value={userData.password} required />
                    <button className='mt-3 w-full bg-Orange h-10 text-white font-bold rounded-sm' type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup"><span className='text-Orange'>Sign up</span></Link></p>
            </div>
            <Toaster />
        </div>
    )
}

export default Login