import React from 'react'
import styles from '../../styles/OrderDet.module.scss'
import OrderDetList from './OrderDetList'


const OrderDet = ({orders}) => {
    return (
        <div>
            {orders.orderDetails.map(od => (
                <OrderDetList od={od} key={od.id}/>
            ))}
        </div>
    )
}

export default OrderDet
