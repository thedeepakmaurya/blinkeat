import React, { useState } from 'react'
import { useFirebase } from '../utils/Firebase'
import { Toaster, toast } from 'react-hot-toast';

const AddItems = () => {

    const firebase = useFirebase();

    const [items, setItems] = useState({
        name: '',
        description: '',
        ingredient: '',
        quantity: '',
        price: '',
    })

    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.addFoodItems(items.name, items.description, items.ingredient, items.quantity, image, items.price)
        setItems({
            name: '',
            description: '',
            ingredient: '',
            quantity: '',
            price: '',
            image: null,
        })
        toast.success('Food Item added successfully!')
    }


    return (
        <div className='w-[50%] p-10 pl-5 h-full '>
            <h1 className='text-primaryBlue text-xl font-light '><i className='bx bxs-bowl-rice' ></i> ADD FOOD ITEM</h1>
            <form className='flex flex-col gap-10 w-full mt-5' onSubmit={handleSubmit}>
                <div className='w-full flex gap-5'>
                    <input className='border-b border-b-primaryBlue outline-none w-1/3' type="text" name="name" placeholder='Item Name' onChange={handleChange} value={items.name} required />
                    <input className='border-b border-b-primaryBlue outline-none w-2/3' type="text" name="description" placeholder='Item Description' onChange={handleChange} value={items.description} required />
                </div>
                <div className='w-full flex gap-5'>
                    <input className='border-b border-b-primaryBlue outline-none w-2/3' type="text" name="ingredient" placeholder='Item Ingredients' onChange={handleChange} value={items.ingredient} required />
                    <input className='border-b border-b-primaryBlue outline-none w-1/3' type="text" name="quantity" placeholder='Item Quantity' onChange={handleChange} value={items.quantity} required />
                </div>
                <div className='w-full flex gap-5'>
                    <input className='border-b border-b-primaryBlue outline-none w-1/3' type="text" name="price" placeholder='Price' onChange={handleChange} value={items.price} required />
                    <input className='border-b border-b-primaryBlue outline-none file:cursor-pointer w-1/3 file:bg-white file:border-none file:text-Orange file:pl-0' type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                    <button className='bg-secondaryBlue p-1 w-1/3 rounded-sm text-primaryBlue' type='submit'><i className='bx bx-plus align-middle' ></i> Add Item</button>
                </div>
                <Toaster />
            </form>
        </div>
    )
}

export default AddItems