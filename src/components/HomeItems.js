import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import { Toaster, toast } from 'react-hot-toast';

const HomeItems = ({ item }) => {

    const firebase = useFirebase();
    const [img, setImg] = useState(null);
    const [qty, setQty] = useState(1);
    const [restaurants, setRestaurants] = useState([]);
    


    useEffect(() => {

        try {
            firebase.getImageUrl(item.data().image).then((url) => setImg(url));
            firebase.restaurantList().then((restaurant) => setRestaurants(restaurant.docs))

        } catch (e) {
            console.log(e);
        }

    }, [])

    const placeOrder = async () => {
        if(firebase.user){
       const result = await firebase.placeOrder(item.id, qty);
       toast.success('Order placed successfully')
       return result
    }else toast.error('Please login to order')
    }


    const getRestaurantName = (id) => {
            const res = restaurants.find((restaurant) => restaurant.id === id);
            if (res){
            return  res.data().name
        } 
        return 'Unknown'
    }

    return (
        <div className='w-[20%] h-auto rounded border-t border-t-Orange border-b border-b-Orange rounded-b-2xl p-2' key={item.id}>
            <img className='rounded-xl w-[100%]' alt='food' src={img} />
            <h1 className='font-bold text-md mt-2'><i className='bx bxs-badge-check' ></i> {getRestaurantName(item.data().restaurantId)}</h1>
            <h1 className='font-bold text-xl mt-2'> {item.data().name}</h1>
            <p >{item.data().description}</p>
            <p className='mt-2'><i className='bx bx-info-circle'></i>  {item.data().ingredient}</p>
            <p><i className='bx bxs-pie-chart-alt'></i> {item.data().quantity}</p>
            <p><i className='bx bx-wallet'></i> {item.data().price} <i className='bx bx-rupee align-middle' ></i></p>
            <div className='flex justify-between'>
            <p><i className='bx bx-label'></i><input type='number' className='outline-none pl-2 w-[30%]' name='quantity' onChange={(e) => setQty(e.target.value)} value={qty} required /></p>
            <button onClick={placeOrder} className='mr-2 pl-1 pr-1 text-nowrap rounded-sm border-dashed font-bold border border-primaryBlue '>Order now</button>
            </div>
            <Toaster />
        </div>
    )
}

export default HomeItems