import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'

const ProfileCard = ({ restaurant }) => {

    const firebase = useFirebase();
    const [url, setUrl] = useState(null);

    useEffect(() => {

        try {
            firebase.getImageUrl(restaurant.data().logo).then((url) => setUrl(url))
        } catch (err) {
            console.log(err)
        }


    }, [])


    return (
        <div className='flex items-center gap-5 w-full' key={restaurant.id}>
            <img className='rounded-full w-60 h-60  ' alt='logo' src={url} />
            <div className='text-Orange w-[52%] h-[80%]'>
                <h2 className=' font-bold text-4xl text-primaryBlue'><i className='bx bxs-buildings align-middle'></i>{restaurant.data().name}</h2>
                <p className='text-md'><i className='bx bx-current-location align-middle' ></i> {restaurant.data().address}</p>
                <p className='text-md pl-5'>{restaurant.data().city}, {restaurant.data().state}</p>
                <p className='text-md pl-5'>{restaurant.data().country}</p>
                <p className='text-md'><i className='bx bxs-phone-call align-middle' ></i> {restaurant.data().contact}</p>
                <p className='text-md'><i className='bx bxs-envelope align-middle' ></i> {restaurant.data().email}</p>
            </div>
        </div>
    )
}

export default ProfileCard