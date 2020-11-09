import React from 'react'
import styles from '../../styles/EmptyCart.module.scss';
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "blitz"
// import Loader from './Loader';

const EmptyCart = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.empty}>
            <FontAwesomeIcon icon={faDolly} className={styles.icon}/>
            <h2 className={styles.h2}>Your Cart is Empty</h2>
            <Link href="/products">
            <a className={styles.button}>Continue Shopping</a>
            </Link>
            </div>
            
        </div>

        {/* <Loader /> */}
        </>
    )
}

export default EmptyCart
