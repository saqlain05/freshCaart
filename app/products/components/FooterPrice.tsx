import React from 'react'
import styles from '../../styles/FooterPrice.module.scss';

const FooterPrice = () => {
    return (
        <div>
           <div className={styles.mainDivs}>
        <div className={styles.mainDiv}>
            <div className={styles.first}>
            <h2 className={styles.header}>14 <span className={styles.span}>Products</span></h2>
            </div>
            <div className={styles.second}>
                <h2 className={styles.header2}>$ 1000</h2>
            </div>
            <div className={styles.third}>
            <button className={styles.button}>CheckOut</button>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default FooterPrice
