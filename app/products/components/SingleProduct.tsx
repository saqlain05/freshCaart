import deleteCart from 'app/carts/mutations/deleteCart'
import getCarts from 'app/carts/queries/getCarts'
import ItemContext from 'app/contexts/ItemContext'
import { useMutation, useQuery } from 'blitz'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import ChangeQty from './ChangeQty'

const SingleProduct = ({product, cartList}) => {
    const [hide, setHide] = useState(false)
    const [qty, setQty] = useState(1)
    const [amt, setAmt] = useState(product.price)
    const [testId, setTestId] = useState(-1)
    const {setShow, setGrandAmount, setGrandQty, grandAmount, grandQty} = useContext(ItemContext)
    const [deleteCartMutation] = useMutation(deleteCart)

    useEffect(() => {
        const basket = JSON.parse(window.localStorage.getItem('cart'))
        if(basket.cart.length > 0) setShow(true)
        basket.cart.forEach(cart => {
            if (cart.productId === product.id) {
                setHide(true)
                setQty(cart.quantity)
                setAmt(cart.price)
            }
        })
        setGrandQty(basket.totalQty)
        setGrandAmount(basket.totalAmount)
    }, [])    

    const incrementValue = () => {
       setQty(qty + 1)
       setAmt((qty + 1) * product.price)
       const bakset = JSON.parse(window.localStorage.getItem('cart'))
       bakset.cart.forEach(cart => {
           if(cart.productId === product.id) {
                ++cart.quantity
                cart.price += product.price
           }
       })
       ++bakset.totalQty
       bakset.totalAmount += product.price
       window.localStorage.setItem('cart', JSON.stringify(bakset))
       setGrandQty(grandQty + 1)
       setGrandAmount(grandAmount + product.price)
    }

    const decrementValue = async () => {
       let flag = false 
       const check = qty - 1
       if(check < product.minQuantity) {
        setHide(!hide)
        setTestId(-1)
        const bakset = JSON.parse(window.localStorage.getItem('cart'))
        bakset.cart.forEach(list => {
            if(list.productId === product.id) {
                bakset.totalQty -= product.minQuantity
                bakset.totalAmount -= (product.price * product.minQuantity)
                setGrandQty(bakset.totalQty)
                setGrandAmount(bakset.totalAmount)
            }
        })
        console.log(product.id)
        bakset.cart = bakset.cart.filter(list => {return list.productId !== product.id})
        console.log(bakset)
        if(bakset.cart.length === 0) setShow(false)
        window.localStorage.setItem('cart', JSON.stringify(bakset))
        if(cartList.length > 0) {
            try {
                const deleted = await deleteCartMutation({
                    where: {userId_productId: {userId: cartList[0].userId, productId: product.id}}
                })
                cartList = cartList.filter(list => {return list.productId !== product.id})
                console.log(cartList)
            } catch (error) {
              console.log(error)                
            }
        }
       } else {
           setQty(qty - 1)
           setAmt((qty - 1) * product.price)
           const bakset = JSON.parse(window.localStorage.getItem('cart'))
           bakset.cart.forEach(cart => {
               if(cart.productId === product.id) {
                    --cart.quantity
                    cart.price -= product.price
               }
           })
           --bakset.totalQty
           bakset.totalAmount -= product.price
           window.localStorage.setItem('cart', JSON.stringify(bakset))
           setGrandQty(grandQty - 1)
           setGrandAmount(grandAmount - product.price)
        } 
    }

    const addCart = () => {
        setHide(!hide)
        setQty(product.minQuantity)
        setAmt(product.minQuantity * product.price)
        const newObject = {
            productId: product.id,
            quantity: product.minQuantity,
            name: product.name,
            price: product.price * product.minQuantity
        }
        const basket = JSON.parse(window.localStorage.getItem('cart'))
        basket.cart.push(newObject)
        basket.totalQty += product.minQuantity
        basket.totalAmount += product.price * product.minQuantity 
        window.localStorage.setItem('cart', JSON.stringify(basket))
        setGrandQty(grandQty + product.minQuantity)
        setGrandAmount(grandAmount + (product.minQuantity * product.price))
        setShow(true)
    }

    return (
        <div className={styles.maindiv} key={product.id}>
            <div className={styles.images}>
                <img className={styles.image} src={product.imageUrl} alt="product image not found"/>
            </div>
            <div className={styles.items}>
                <h2 className={styles.title}>{product.name}</h2>
                <div className={styles.prices}>
                <h5 className={styles.price}>{qty} <span className={styles.price2}>{product.measureUnit}</span></h5>
                <h5 className={styles.price}>Rs <span className={styles.price2}>{amt}</span></h5>
                </div>
                <p className={styles.para}>(Minimum Order Quantity - <span className={styles.para2}>{product.minQuantity}</span> KG)</p>
                {(hide) ? (
                    <ChangeQty qty={qty} incrementValue={incrementValue} decrementValue={decrementValue} min={product.minQuantity}/>
                ) : (
                    <button className={styles.addToCart} onClick={addCart}>Add To Cart</button>
                )}
            </div>
        </div>
    )
}

export default SingleProduct

