import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import img from '../assets/img/orders.svg'

const Orders = () => {

    const firebase = useFirebase();

    const [orders, setOrders] = useState([]);
    const [lists, setLists] = useState([]);

    useEffect(() => {

        if (firebase.user && firebase.user.uid) {
            firebase.getUserOrders().then((order) => setOrders(order.docs))
            firebase.listItems().then((list) => setLists(list.docs))
        }
        else {
            setOrders([])
        }
    }, [firebase])

    const getItemName = (id) => {
         const list = lists.find((list ) => list.id === id);
         if(list){
            return list.data().name;
         }
         return 'Unknown';

    }

    const getItemPrice = (id) => {
        const list = lists.find((list ) => list.id === id);
        if(list){
           return list.data().price;
        }
        return 'Unknown';

   }

    return (
        <div className='w-full flex '>
            <div className='w-2/3 p-10 '>
                <h1 className='text-primaryBlue text-xl font-light '><i className='bx bx-list-ul'></i> MY ORDERS</h1>
                <div className='flex flex-col mt-5'>
                    {
                        orders.map((order, index) => (
                            <div className='flex gap-4' key={order.id}>
                                <h1 className='rounded-full w-5 h-5 items-center flex text-white justify-center bg-primaryBlue'>{index + 1}</h1>
                                <h2>Item: <span className='text-Orange'>{getItemName(order.data().itemId)}</span></h2>
                                <h3>Qty: <span className='text-Orange'>{order.data().qty}</span></h3>
                                <h2>Price: <span className='text-Orange'>{getItemPrice(order.data().itemId)} ₹ * {order.data().qty}</span></h2>
                                <h2>Order ID: <span className='text-Orange'>{order.id}</span></h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-1/3 p-10'> 
            <img alt='order' src={img}/>
            </div>
        </div>
    )
}

export default Orders