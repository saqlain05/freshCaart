import updateUser from 'app/users/queries/updateUser'
import { useMutation } from 'blitz'
import { useState } from 'react'
import styles from '../../styles/UserManage.module.scss'


const UserList = ({user}) => {

    const [verify, setVerify] = useState(user.verified)
    const [unit, setUnit] = useState(user)
    const [updateUserMutation] = useMutation(updateUser)

    const handleClick = async () => {
        try {
            setVerify(!verify)
            const user = await updateUserMutation({
                where: {id: unit.id},
                data: {verified: true}
            })
            console.log(user)
            setUnit(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {unit !== null ? (
                <>
                    <div className={styles.items}>
                        <div className={styles.title}>
                            <p>Name</p>
                            <p>Email</p>
                        </div>
                        <div className={styles.data}>
                            <p>{unit.name}</p>
                            <p>{unit.email}</p>
                        </div>
                        <div className={styles.button}>
                            <button onClick={handleClick} className={styles.buttonVerify}>{(verify).toString()}</button>
                        </div>
                    </div>
                </>
             ) : (<div>

            </div>)  } 
        </>
    )
}

export default UserList
