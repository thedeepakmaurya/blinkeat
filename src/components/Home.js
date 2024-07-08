import React, { useEffect, useState } from 'react'
import HomeItems from './HomeItems'
import { useFirebase } from '../utils/Firebase'
import ResCards from './ResCards';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const firebase = useFirebase();
    const [items, setItems] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000)

    const navigate = useNavigate();


    useEffect(() => {

        const fetchItems = () => {
            try {
                firebase.listItems().then((item) => setItems(item.docs));
                firebase.restaurantList().then((restaurant) => setRestaurants(restaurant.docs));
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchItems();

    }, [])


    if(firebase.role === 'restaurant'){
        navigate('/restaurant-info')
        return null;
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className='w-full p-10 '>
                <h1 className='text-primaryBlue text-xl font-light '><i className='bx bx-restaurant'></i> FAVOURITE RESTAURANTS</h1>
                <div className='flex overflow-x-scroll justify-center gap-14 mt-5'>

                    {restaurants.map((res) => (
                        <ResCards key={res.id} restaurant={res} />
                    ))
                    }
                </div>
            </div>
            <div className='w-full p-10 pt-5'>
                <h1 className='text-primaryBlue text-xl font-light '><i className='bx bxs-pizza'></i> DELICIOUS FOOD</h1>
                <div className='flex flex-wrap justify-center gap-14 mt-5'>
                    {
                        items.map(item => (
                            <HomeItems key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Home