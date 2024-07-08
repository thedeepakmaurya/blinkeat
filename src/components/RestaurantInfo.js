import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import AddItems from './AddItems';
import Unauthorized from './Unauthorized';
import Items from './Items';
import ProfileCard from './ProfileCard';
import Loading from './Loading';

const RestaurantInfo = () => {

    const firebase = useFirebase()

    const [restaurant, setRestaurant] = useState([]);
    const [currRestaurant, setCurrRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 2000)


    useEffect(() => {
        const getRestaurantData = () => {
            try {
                // const restaurants = await getDocs(collection(firebase.firestore, 'restaurants'));
                // const firstRestaurant = restaurants.docs;
                // setRestaurant(firstRestaurant);

                firebase.restaurantList().then((restaurants) => setRestaurant(restaurants.docs));

                let res = [];
                res = restaurant.filter((restaurant) => restaurant.id === firebase.user.uid);
                setCurrRestaurant(res);

            } catch (error) {
                console.log(error);
            }
        };
        getRestaurantData();

    }, [restaurant])



    if (loading) {
        return <Loading />
    }


    return firebase.user && firebase.role === 'restaurant' ? (
        <>
            <div className='flex items-center justify-center w-full h-80  gap-10 mt-5 '>
                <div className='w-50% p-10 pr-5 h-full border-r border-r-primaryBlue border-l border-l-primaryBlue rounded-r-3xl rounded-l-3xl'>
                    {currRestaurant.map(res => (
                        <ProfileCard key={res.id} restaurant={res} />
                    ))
                    }
                </div>

                {/* Add Items Component */}
                <AddItems />
            </div>

            {/*Items Component */}
            <Items />

        </>

    ) : <Unauthorized />
}

export default RestaurantInfo