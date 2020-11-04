import React from 'react'
import styles from '../../styles/Cart.module.scss';
import CartList from './CartList';

const Cart = () => {
    return (
        <>
           <div className={styles.mainDiv}>
               <div className={styles.Heading}>
                   <h2 className={styles.head1}>Cart</h2>
                   <h2 className={styles.head2}>Verify Your Order Items</h2>
               </div>
               <div className={styles.items}>
                   <CartList />
               </div>
            </div> 
        </>
    )
}

export default Cart
