import React from 'react'
import styles from '../../styles/Phone.module.scss';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Phone = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.empty}>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/>
            <h2 className={styles.h2}>Need Help With Orders?</h2>
            <h2 className={styles.h3}>1800-252-5555</h2>
            <h2 className={styles.h4}>Call Us For Support</h2>
            </div>
            
        </div>
        </>
    )
}

export default Phone
