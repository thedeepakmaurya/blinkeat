import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import ItemCard from './ItemCard';

const Items = () => {

    const firebase = useFirebase();

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState([])

    useEffect(() => {

        const fetchData = () => {

            try {
                firebase.listItems().then((item) => setItems(item.docs));

                let currItem = [];
                currItem = items.filter((item) => item.data().restaurantId === firebase.user.uid);
                setCurrentItem(currItem);

            } catch (e) {
                console.error(e);
            }

        }

        fetchData();

    }, [firebase, items])

    return (
        <div className='w-full p-10'>
            <h1 className='text-primaryBlue text-xl font-light '><i className='bx bx-food-menu'></i> LISTED ITEMS</h1>
            <div className='flex flex-wrap justify-center gap-14 mt-5'>
                {
                    currentItem.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Items