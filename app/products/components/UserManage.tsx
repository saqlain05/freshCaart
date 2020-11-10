import React from 'react'
import styles from '../../styles/UserManage.module.scss'
import UserList from './UserList'

const UserManage = ({users}) => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.header}>
                    <h2 className={styles.head}>Manage User</h2>
                </div>
                {users.map(user => (
                    <UserList user={user} key={user.id}/>
                ))}
            </div>
        </div>
    )
}

export default UserManage
