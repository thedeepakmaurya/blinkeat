import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase';

const ItemCard = ({ item }) => {

    const firebase = useFirebase();

    const [img, setImg] = useState(null)

    useEffect(() => {

        try {
            firebase.getImageUrl(item.data().image).then((url) => setImg(url));

        } catch (e) {
            console.log(e);
        }

    })

    return (
        <div className='w-[20%] h-auto rounded border-t border-t-Orange border-b border-b-Orange rounded-b-2xl p-2' key={item.id}>
            <img className='rounded-xl w-[100%]' alt='food' src={img} />
            <h1 className='font-bold text-xl mt-2'><i className='bx bxs-star' ></i> {item.data().name}</h1>
            <p >{item.data().description}</p>
            <p className='mt-2'><i className='bx bx-info-circle'></i>  {item.data().ingredient}</p>
            <p><i className='bx bxs-pie-chart-alt'></i> {item.data().quantity}</p>
            <p><i className='bx bx-wallet'></i> {item.data().price} <i className='bx bx-rupee align-middle' ></i></p>
        </div>
    )
}

export default ItemCard