import getCarts from 'app/carts/queries/getCarts'
import ItemContext from 'app/contexts/ItemContext'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import { GetServerSideProps, useQuery, useSession } from 'blitz'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import getProducts from '../queries/getProducts'
import SingleProduct from './SingleProduct'


const ProductList = ({data}) => {
    const user = useCurrentUser()
    const cartList = data.carts.filter(cart => cart.userId === user?.id)
    const [{products}] = useQuery(getProducts, {})
   
    return (
        <div className={styles.div}>
            {products.map(product => (
                <SingleProduct product={product} key={product.id} cartList={cartList}/>
            ))}
        </div>
    )
}

export default ProductList
