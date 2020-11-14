import upsertCart from 'app/carts/mutations/upsertCart';
import ItemContext from 'app/contexts/ItemContext';
import { useMutation, useRouter, useSession } from 'blitz';
import React, { useContext, useEffect } from 'react'
import styles from '../../styles/FooterPrice.module.scss';

const FooterPrice = () => {

    const maxQty = 34;
    const router = useRouter()
    const user = useSession()
    const [upsertCartMutation] = useMutation(upsertCart)
    const test = useContext(ItemContext)
    const basket = JSON.parse(window.localStorage.getItem('cart') || '{}')

    const addToCart = async () => {
        try {
            basket.cart.forEach(async cart => {
                const insertCart = await upsertCartMutation({
                   where: {userId_productId: {userId: user?.userId, productId: cart.productId}},
                   update: {
                       quantity: cart.quantity,
                       productPrice: cart.price
                   },
                   create: {
                       user: {connect: {id: user?.userId}},
                       product: {connect: {id: cart.productId}},
                       productPrice: cart.price,
                       quantity: cart.quantity
                   }
                })
                console.log(insertCart)
            })
            router.push('/products/cart')
        } catch (error) {
            console.log(error)
        }
    }
        
    return (
        <div>
            <div className={styles.mainDivs}>
              <div className={styles.mainDiv}>
              <div className={styles.google}>
                  <div className={styles.animatedPara}>
                <p >Total Quantity Should be more than <span> {maxQty} KG </span></p></div>
                
                </div>
                <div className={styles.google2}>
                <div className={styles.first}>
                    <h2 className={styles.header}>{test?.grandQty} <span className={styles.span}>Products</span></h2>
                </div>
                <div className={styles.second}>
                    <h2 className={styles.header2}>Rs. {test?.grandAmount}</h2>
                </div>
                <div className={styles.third}>
                    <button disabled={Number(test?.grandQty) <= maxQty && true} onClick={addToCart} className={styles.button}>CheckOut</button>
                </div>
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default FooterPrice
