import React from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 shadow-lg pl-10 pr-14 shadow-gray-100'>
            <img className='h-14' alt='logo' src={logo} />
            <div className='flex gap-5'>
                <Link to='/vendor'> <span className='text-xl'><i class='bx bxs-user-plus bx-sm align-middle' ></i> Reataurant Registration</span></Link>
                <Link to='#'> <span className='text-xl'><i class='bx bxs-offer bx-sm align-middle' ></i> Offers <sup className='text-Orange'>New!</sup></span></Link>
                <Link to='/login'> <span className='text-xl'><i class='bx bxs-log-in bx-sm align-middle' ></i> Sign In</span></Link>
                <Link to='/cart'><span className='text-xl'><i className='bx bxs-cart-alt bx-sm align-middle'></i> Cart</span></Link>
            </div>
        </div>
    )
}

export default Navbar