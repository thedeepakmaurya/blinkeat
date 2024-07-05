import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import AddItems from './AddItems';
import Loading from './Loading';
import Unauthorized from './Unauthorized';

const RestaurantInfo = () => {

    const firebase = useFirebase()

    const [restaurant, setRestaurant] = useState([]);
    const [currRestaurant, setCurrRestaurant] = useState([]);
    const [url, setUrl] = useState('');


    useEffect(() => {
        const getRestaurantData = async () => {
            try {
                const restaurants = await getDocs(collection(firebase.firestore, 'restaurants'));
                const firstRestaurant = restaurants.docs;
                setRestaurant(firstRestaurant);

                let res = [];
                res = restaurant.filter((restaurant) => restaurant.id === firebase.user.uid);
                setCurrRestaurant(res);

                firebase.getImageUrl(currRestaurant[0].data().logo).then((url) => setUrl(url))

            } catch (error) {
                console.log(error);
            }
        };
        getRestaurantData();

    }, [firebase, currRestaurant, restaurant])


    if(!firebase.user && !firebase.role === 'restaurant'){
        return <Unauthorized/>
    }

    if (!url) {
        return <Loading />
    }

    return (
        <div className='flex items-center justify-center w-full h-80 shadow-lg shadow-Orange'>
            <div className='w-50% p-10 pr-5 h-full'>
                {currRestaurant.map(res => (
                    <div className='flex gap-5 w-full' key={res.id}>
                        <img className='rounded-xl w-[48%] h-[80%]' alt='logo' src={url} />
                        <div className='text-Orange w-[52%] h-[80%]'>
                            <h2 className=' font-bold text-4xl text-primaryBlue'><i className='bx bxs-buildings align-middle'></i>{res.data().name}</h2>
                            <p className='text-md'><i className='bx bx-current-location align-middle' ></i> {res.data().address}</p>
                            <p className='text-md pl-5'>{res.data().city}, {res.data().state}</p>
                            <p className='text-md pl-5'>{res.data().country}</p>
                            <p className='text-md'><i className='bx bxs-phone-call align-middle' ></i> {res.data().contact}</p>
                            <p className='text-md'><i className='bx bxs-envelope align-middle' ></i> {res.data().email}</p>
                        </div>
                    </div>)
                )}
            </div>

            {/* Add Items Component */}
            <AddItems />
        </div>
    )
}

export default RestaurantInfo