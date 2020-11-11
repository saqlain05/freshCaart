import deleteCart from 'app/carts/mutations/deleteCart'
import getCarts from 'app/carts/queries/getCarts'
import ItemContext from 'app/contexts/ItemContext'
import { Link, useMutation, useQuery } from 'blitz'
import { parseCookies } from 'nookies'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Product.module.scss'
import deleteProduct from '../mutations/deleteProduct'
import ChangeQty from './ChangeQty'
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProduct = ({product, cartList}) => {
    const {role} = parseCookies()
    const stock = product.stock;
    const [hide, setHide] = useState(false)
    const [qty, setQty] = useState(1)
    const [amt, setAmt] = useState(product.price)
    const [testId, setTestId] = useState(-1)
    const test = useContext(ItemContext)
    const [deleteCartMutation] = useMutation(deleteCart)

    useEffect(() => {
        const basket = JSON.parse(window.localStorage.getItem('cart') || '{}')
        if(basket.cart.length > 0) test?.setShow(true)
        basket.cart.forEach(cart => {
            if (cart.productId === product.id) {
                setHide(true)
                setQty(cart.quantity)
                setAmt(cart.price)
            }
        })
        test?.setGrandQty(basket.totalQty)
        test?.setGrandAmount(basket.totalAmount)
    }, [])    

    const incrementValue = () => {
       setQty(qty + 1)
       setAmt((qty + 1) * product.price)
       const bakset = JSON.parse(window.localStorage.getItem('cart') || '{}')
       bakset.cart.forEach(cart => {
           if(cart.productId === product.id) {
                ++cart.quantity
                cart.price += product.price
           }
       })
       ++bakset.totalQty
       bakset.totalAmount += product.price
       window.localStorage.setItem('cart', JSON.stringify(bakset))
       test?.setGrandQty(test?.grandQty + 1)
       test?.setGrandAmount(test?.grandAmount + product.price)
    }

    const decrementValue = async () => {
       let flag = false 
       const check = qty - 1
       if(check < product.minQuantity) {
        setHide(!hide)
        setQty(1)
        setAmt(product.price)
        setTestId(-1)
        const bakset = JSON.parse(window.localStorage.getItem('cart') || '{}')
        bakset.cart.forEach(list => {
            if(list.productId === product.id) {
                bakset.totalQty -= product.minQuantity
                bakset.totalAmount -= (product.price * product.minQuantity)
                test?.setGrandQty(bakset.totalQty)
                test?.setGrandAmount(bakset.totalAmount)
            }
        })
        console.log(product.id)
        bakset.cart = bakset.cart.filter(list => {return list.productId !== product.id})
        console.log(bakset)
        if(bakset.cart.length === 0) test?.setShow(false)
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
           const bakset = JSON.parse(window.localStorage.getItem('cart') || '{}')
           bakset.cart.forEach(carts => {
               if(carts.productId === product.id) {
                    --carts.quantity
                    carts.price -= product.price
               }
           })
           --bakset.totalQty
           bakset.totalAmount -= product.price
           window.localStorage.setItem('cart', JSON.stringify(bakset))
           test?.setGrandQty(test?.grandQty - 1)
           test?.setGrandAmount(test?.grandAmount - product.price)
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
        const basket = JSON.parse(window.localStorage.getItem('cart') || '{}')
        basket.cart.push(newObject)
        basket.totalQty += product.minQuantity
        basket.totalAmount += product.price * product.minQuantity 
        window.localStorage.setItem('cart', JSON.stringify(basket))
        test?.setGrandQty(test?.grandQty + product.minQuantity)
        test?.setGrandAmount(test?.grandAmount + (product.minQuantity * product.price))
        test?.setShow(true)
    }

    return (
        <>
        
        
        <div className={styles.maindiv} key={product.id}>
            {/* <Link href="/products/[productId]/edit" as={`/products/${product.id}/edit`}><a >eiit</a></Link> */}

            <div className={styles.images}>
            <div className={styles.edit}>
        {role ==='admin' ? <div className={styles.edit}>
        <Link href="/products/[productId]/edit" as={`/products/${product.id}/edit`}><a ><FontAwesomeIcon icon={faPen} /> </a></Link>
        <button style={{background:'transparent', color: 'red'}}
            className="delete"
            type="button"
            onClick={async () => {
                if (window.confirm("This will be deleted")) {
                    await deleteProduct({ where: { id: product.id } })
                    // router.push("/author")
                }
            }}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </button> 
        </div>
        :''}
      
        </div>
                <img className={styles.image} src={product.imageUrl} alt="product image not found"/>
               
            </div>
            <div className={styles.items}>
                <h2 className={styles.title}>{product.name}</h2>
                <div className={styles.prices}>
                <h5 className={styles.price}>{qty} <span className={styles.price2}> {product.measureUnit} </span></h5>
                <h5 className={styles.price}>Rs <span className={styles.price2}>{amt}</span></h5>
                
                </div>
                <p className={styles.para}>(Minimum Order Quantity - <span className={styles.para2}>{product.minQuantity}</span> {product.measureUnit} )</p>
                {(hide) ? (
                    <ChangeQty qty={qty} incrementValue={incrementValue} decrementValue={decrementValue} min={product.minQuantity}/>
                ) : <div>
                    {(stock)? <div> <button className={styles.addToCart} onClick={addCart}>Add To Cart</button> </div> : <div><b>OUT OF STOCK</b></div> }
                    {/* // <button className={styles.addToCart} onClick={addCart}>Add To Cart</button> */}
                   
                </div>}
                
            </div>
        </div>
        </>
    )
}

export default SingleProduct

