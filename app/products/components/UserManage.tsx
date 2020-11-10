import React from 'react'
import styles from '../../styles/UserManage.module.scss'

const UserManage = () => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.header}>
                    <h2 className={styles.head}>Manage User</h2>
                </div>

                <div className={styles.items}>
                    <div className={styles.title}>
                        <p>Name</p>
                        <p>Email</p>
                        
                    </div>
                    <div className={styles.data}>
                        <p>Name</p>
                        <p>Email</p>
                       
                    </div>
                    <div className={styles.button}>
                        <button className={styles.buttonVerify}>Verify</button>
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.title}>
                        <p>Name</p>
                        <p>Email</p>
                        
                    </div>
                    <div className={styles.data}>
                        <p>Name</p>
                        <p>Email</p>
                       
                    </div>
                    <div className={styles.button}>
                        <button className={styles.buttonUnVerify}>Un Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManage
