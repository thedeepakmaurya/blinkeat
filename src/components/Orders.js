import React, { useEffect, useState } from 'react'
import { useFirebase } from '../utils/Firebase'

const Orders = () => {

    const firebase = useFirebase();

    useEffect(() => {

    }, [firebase])

    return (
        <div>Orders</div>
    )
}

export default Orders