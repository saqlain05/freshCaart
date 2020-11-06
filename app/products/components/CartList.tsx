import React from 'react'
import { Link, usePaginatedQuery, useRouter, BlitzPage, useQuery, useSession } from "blitz"
import getCarts from 'app/carts/queries/getCarts'
import styles from '../../styles/Cart.module.scss';
import SingleCart from './SingleCart';
const CartList = () => {
    const user = useSession()
    const [{carts}] = useQuery(getCarts, {
        include:{product:true}
    })
    const lists = carts.filter(cart => { return cart.userId === user.userId})
    return (
        <div>
            {lists.map((cart) => (
               <SingleCart bucket={cart} key={cart.productId}/>             
            ))}
        </div>
    )
}

export default CartList
