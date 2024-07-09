import React from 'react'
import logo from '../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../utils/Firebase'
import { Toaster, toast } from 'react-hot-toast'

const Navbar = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center w-full h-20 border-b border-b-Orange  rounded-b-3xl pl-10 pr-14  sticky top-0 bg-white' >
            <img className='h-14' alt='logo' src={logo} />
            <div className='flex gap-5'>
                {
                   firebase.role !== 'restaurant' && <Link to='/'><span className='text-xl'><i className='bx bxs-home-smile bx-sm align-middle'></i> Home</span></Link>

                }
                {
                    firebase.role === 'restaurant' ? <Link to='/restaurant-info'> <span className='text-xl'><i className='bx bx-restaurant bx-sm align-middle' ></i> Reataurant Information</span></Link> : <Link to='/restaurant'> <span className='text-xl'><i className='bx bx-restaurant bx-sm align-middle' ></i> Reataurant Registration</span></Link>
                }
                <Link to='/offer'> <span className='text-xl'><i className='bx bxs-offer bx-sm align-middle' ></i> Offers <sup className='text-Orange'>New!</sup></span></Link>
                {
                    firebase.user ? <span className='text-xl cursor-pointer' onClick={() => { firebase.signOut(); toast.success('Signout successfull'); navigate('/'); }}><i className='bx bxs-log-out bx-sm align-middle' ></i> Sign Out</span> : <Link to='/login'> <span className='text-xl'><i className='bx bxs-log-in bx-sm align-middle' ></i> Sign In</span></Link>
                }

                {
                  firebase.user && (firebase.role === 'restaurant' ? <Link to='/orders'><span className='text-xl'><i className='bx bxs-cart-alt bxs-notepad align-middle'></i> Orders</span></Link> : <Link to='/orders'><span className='text-xl'><i className='bx bx-check-double bx-sm align-middle'></i> My Orders</span></Link>)
                }
            </div>
            <Toaster/>
        </div>
    )
}

export default Navbar