import React, { useState } from 'react'
import styles from '../../styles/Cart.module.scss';


const OrderChange = ({basket, setValue, value}) => {
    const [quantity, setQuantity] = useState(basket.quantity)
    console.log(basket)
    console.log(value)
    const increment = () => {
      setQuantity(quantity + 1)
      setValue(value + 1)
      const cart = JSON.parse(window.localStorage.getItem('cart'))
      cart.forEach(cart => {
        cart.productId === basket.productId && (cart.quantity = quantity + 1 )
      })
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    const decrement = () => {
      setQuantity(quantity - 1)
      setValue(value - 1)
      const cart = JSON.parse(window.localStorage.getItem('cart'))
      cart.forEach(cart => {
        cart.productId === basket.productId && (cart.quantity = quantity - 1 )
      })
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <div>
            <div className={styles.buttons}>
                <button disabled={quantity <= basket.product.minQuantity} onClick = {decrement} className={styles.button1}>-</button>
                <div className={styles.buttonSpan}>{quantity}</div>
                <button onClick = {increment} className={styles.button1}>+</button>
                <div className={styles.buttonSpan}>Total: {basket.productPrice * quantity}</div>
            </div>
        </div>
    )

}

export default OrderChange
