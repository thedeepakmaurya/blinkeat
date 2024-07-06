import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase';

const ResCards = ({ restaurant }) => {


    const [url, setUrl] = useState();

    const firebase = useFirebase();


    useEffect(() => {

        try {

            firebase.getImageUrl(restaurant.data().logo).then(url => setUrl(url));

        } catch (error) {
            console.log(error)
        }

    }, [])


    return (
        <div className='cursor-pointer  flex flex-col items-center justify-center h-auto p-2' >
            <img className='rounded-full w-32 h-32' alt='logo' src={url} />
            <h1 className='mt-5 text-Orange text-lg'>{restaurant.data().name}</h1>
        </div>
    )
}

export default ResCards