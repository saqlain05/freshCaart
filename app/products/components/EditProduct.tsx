import React from 'react'
import { Form, Field } from "react-final-form"
import { useParam, useQuery, useRouter, useSession } from "blitz"
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import getProduct from '../queries/getProduct'
// import styles from '../../styles/Profile.module.scss'

const EditProduct = () => {
    const uid = useCurrentUser();
    const sqid = uid?.id;
    const [product, { mutate }] = useQuery(getProduct, { where: { userId: sqid } })
    return (
        <div>
            
        </div>
    )
}

export default EditProduct
