import { Link } from 'blitz';
import React, { useState } from 'react';
import styles from '../../styles/OrderHistory.module.scss';
import OrderDet from './OrderDet';


const OrderList = ({orderss}) => {
    const [view, setView] = useState(false)
    return (
        <div>
            <div className={styles.orders} key={orderss.id}>
                <div className={styles.title}>
                    <h2 className={styles.head1}>Order No.  </h2>
                    <h2 className={styles.head11}>Order Date</h2>
                    <h2 className={styles.head1}>Order Amount</h2>
                    <h2 className={styles.head1}>Total Products</h2>
                </div>
                
                <div className={styles.titleBold}>
                    <h2 className={styles.head2}> 00{orderss.id} </h2>
                    <h2 className={styles.head2}> {orderss.updatedAt.toLocaleString()} </h2>
                    <h2 className={styles.head2}> {orderss.totalPrice} INR</h2>
                    <h2 className={styles.head2}>{orderss.totalQty}</h2>
                </div>

                <div className={styles.button}>
                    <button className={styles.headPending}>{orderss.orderStatus}</button>
                    <button className={styles.det} onClick={() => setView(!view)}>View Details</button>
                </div>
                <br/>
            </div>
            <>
                {view && (
                    <OrderDet orders={orderss}/>
                )}
            </>
        </div>
    )
}

export default OrderList
