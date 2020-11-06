import styles from '../../styles/Cart.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from 'react';
import ItemContext from 'app/contexts/ItemContext';
import { useMutation, useSession } from 'blitz';
import deleteCart from 'app/carts/mutations/deleteCart';

const SingleCart = ({bucket}) => {
    console.log(bucket)
    const [cart, setCart] = useState(bucket)
    const user = useSession()
    const [qty, setQty] = useState(bucket.quantity)
    const [amt, setAmt] = useState(bucket.productPrice)
    const {setGrandAmount, setGrandQty, grandAmount, grandQty} = useContext(ItemContext)
    const [deleteCartMutation] = useMutation(deleteCart)

    useEffect(() => {
        const basket = JSON.parse(window.localStorage.getItem('cart'))
        if(basket.cart.length > 0) 
        basket.cart.forEach(carts => {
            if (carts.productId === bucket.product.id) {
                setQty(carts.quantity)
                setAmt(carts.price)
            }
        })
        setGrandQty(basket.totalQty)
        setGrandAmount(basket.totalAmount)
    }, [])

    const incrementValue = () => {
        setQty(qty + 1)
        setAmt((qty + 1) * cart.product.price)
        const bakset = JSON.parse(window.localStorage.getItem('cart'))
        bakset.cart.forEach(carts => {
            if(carts.productId === cart.productId) {
                ++carts.quantity
                carts.price += cart.product.price
            }
        })
        ++bakset.totalQty
        bakset.totalAmount += cart.product.price
        window.localStorage.setItem('cart', JSON.stringify(bakset))
        setGrandQty(grandQty + 1)
        setGrandAmount(grandAmount + cart.product.price)
    }

    const decrementValue = () => {
        setQty(qty - 1)
        setAmt((qty - 1) * cart.product.price)
        const bakset = JSON.parse(window.localStorage.getItem('cart'))
        bakset.cart.forEach(carts => {
            if(carts.productId === cart.product.id) {
                --carts.quantity
                carts.price -= cart.product.price
            }
        })
        --bakset.totalQty
        bakset.totalAmount -= cart.product.price
        window.localStorage.setItem('cart', JSON.stringify(bakset))
        setGrandQty(grandQty - 1)
        setGrandAmount(grandAmount - cart.product.price)
    }

    const deleteIndCart = async () => {
        const bakset = JSON.parse(window.localStorage.getItem('cart'))
        bakset.cart.forEach(list => {
            if(list.productId === bucket.product.id) {
                bakset.totalQty -= qty
                bakset.totalAmount -= amt
                setGrandQty(bakset.totalQty)
                setGrandAmount(bakset.totalAmount)
            }
        })
        console.log(cart.product.id)
        bakset.cart = bakset.cart.filter(list => {return list.productId !== bucket.product.id})
        console.log(bakset)
        window.localStorage.setItem('cart', JSON.stringify(bakset))
        try {
            const deleted = await deleteCartMutation({
                where: {userId_productId: {userId: user.userId, productId: cart.product.id}}
            })
            setCart(null)
        } catch (error) {
            console.log(error)                
        }
    }

    return (
        <>
            {cart !==null ? (
                <div className={styles.fulldiv}>
                
                        <div className={styles.image}>
                            <img className={styles.img} src={cart.product.imageUrl} alt="Potato img" />
                        </div>
                        <div className={styles.items}>
                            <div className={styles.titles}>
                                <h2 className={styles.title}> {cart.product.name} </h2>
                                <button onClick={deleteIndCart} className={styles.title1}><FontAwesomeIcon icon={faTrashAlt} className={styles.ProfileIcons}/></button>
                            </div>
                            <div className={styles.item}>
                                <p className={styles.para}>Price: <span className={styles.span}>Rs {amt}</span></p>
                                <div className={styles.button}>
                                    <button disabled={qty <= cart.product.minQuantity && true} className={styles.plus} onClick={decrementValue}>-</button>
                                    <p className={styles.para2}> <span className={styles.span2}>{qty}</span> Kg</p>
                                    <button onClick={incrementValue} className={styles.plus}>+</button>
                                </div>
                            </div>
                            <p className={styles.para3}>(Minimum Order Quantity - <span className={styles.span3}>{cart.product.minQuantity} KG</span>)</p>
                        </div>
                    </div>
                ) : (
                    <div>
                
                    </div>
            )}
        </>    
    )
}

export default SingleCart
