import React from 'react'
import styles from '../../styles/EmptyCart.module.scss';
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyCart = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.empty}>
            <FontAwesomeIcon icon={faDolly} className={styles.icon}/>
            <h2 className={styles.h2}>Your Cart is Empty</h2>
            <a className={styles.button}>Continue Shopping</a>
            </div>
            
        </div>
        </>
    )
}

export default EmptyCart
