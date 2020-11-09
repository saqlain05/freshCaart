import React from 'react'
import styles from '../../styles/Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.centerDiv}>
                <div className={styles.rot}></div>
                <h1 className={styles.h1}>Loading <br/>FreshCaart </h1>
            
            </div>          
        </div>
    )
}

export default Loader
