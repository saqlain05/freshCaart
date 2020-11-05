import getCarts from 'app/carts/queries/getCarts'
import ItemContext from 'app/contexts/ItemContext'
import { GetServerSideProps, useQuery, useSession } from 'blitz'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import getProducts from '../queries/getProducts'
import SingleProduct from './SingleProduct'

const ProductList = () => {
    const [{products}] = useQuery(getProducts, {})
    console.log(products)
   
    return (
        <div className={styles.div}>
            {products.map(product => (
                <SingleProduct product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default ProductList
