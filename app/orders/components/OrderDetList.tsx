import styles from '../../styles/OrderDet.module.scss'

import React from 'react'

const OrderDetList = ({od}) => {
    return (
        <div className={styles.mainDiv}>
                <div className={styles.items}>
                    <div className={styles.image}>
                        <img src={od.product.imageUrl} alt="" className={styles.img}/>
                    </div>
                    <div className={styles.titles}>
                        <h2 className={styles.title}>{od.product.name}</h2>
                        <h2 className={styles.qty}>Order Qty <span className="qtyBold">{od.quantity}</span></h2>
                        <h2 className={styles.qty}>Order Amount <span className="qtyBold">Rs {od.productPrice}</span></h2>
                    </div>
                </div>
            </div>
    )
}

export default OrderDetList
