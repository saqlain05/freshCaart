import { Link } from 'blitz';
import React from 'react'
import styles from '../../styles/OrderHistory.module.scss';
import OrderList from './OrderList';

const OrderHistory = ({orders}) => {
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.heading}>
                    <h2 className={styles.head}>Order History</h2>
                </div>
                {orders.map((orderss)=>(
                    <div  key={orderss.id}>
                        <OrderList orderss={orderss}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OrderHistory
