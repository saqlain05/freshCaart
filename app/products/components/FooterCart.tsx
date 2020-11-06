import upsertCart from 'app/carts/mutations/upsertCart';
import ItemContext from 'app/contexts/ItemContext';
import { useMutation, useRouter, useSession } from 'blitz';
import React, { useContext, useEffect } from 'react'
import styles from '../../styles/FooterPrice.module.scss';

const FooterCart = () => {
    const router = useRouter()
    const user = useSession()
    const {setGrandQty, grandQty, setGrandAmount, grandAmount} = useContext(ItemContext)
    const [upsertCartMutation] = useMutation(upsertCart)

    useEffect(() => {
       const basket = JSON.parse(window.localStorage.getItem('cart'))
       setGrandQty(basket.totalQty)
       setGrandAmount(basket.totalAmount)
    }, [])

    const handleClick = async () => {
        const basket = JSON.parse(window.localStorage.getItem('cart'))
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
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
        
    return (
        <div>
            <div className={styles.mainDivs}>
              <div className={styles.mainDiv}>
                <div className={styles.first}>
                    <h2 className={styles.header}>{grandQty} <span className={styles.span}>Products</span></h2>
                </div>
                <div className={styles.second}>
                    <h2 className={styles.header2}>Rs. {grandAmount}</h2>
                </div>
                <div className={styles.third}>
                    {/* <button disabled={grandQty <= 30 && true} onClick={addToCart} className={styles.button}>CheckOut</button> */}
                    <button disabled={grandQty < 34 && true} onClick={handleClick} className={styles.button}>Place Order</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default FooterCart
