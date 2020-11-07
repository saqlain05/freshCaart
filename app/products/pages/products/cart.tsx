import Cart from 'app/products/components/Cart'
import React, { useContext, useEffect, useState } from 'react'
import Layout from "app/layouts/Layout"
import FooterCart from 'app/products/components/FooterCart'
import EmptyCart from 'app/products/components/EmptyCart'
import Phone from 'app/products/components/Phone'
import ItemContext from 'app/contexts/ItemContext'

const cart = () => {

    const {show, setShow} = useContext(ItemContext)
    const [empty, setEmpty] = useState(true)

    useEffect(() => {
       const basket = JSON.parse(window.localStorage.getItem('cart'))
       if(basket.cart.length > 0) {
           setShow(true)
           setEmpty(false)
       }
       else {
           setShow(false)
           setEmpty(true)
        }
    }, [])

    return (
        <div>
            <Cart />
            <br/><br/>
            {empty && 
               <> <EmptyCart /> 
               <hr style={{width:'85%', margin:'auto', marginTop:'1rem',marginBottom:'1rem'}} /> 
               <Phone /></>
            }
            <br/>
            {show && 
                <FooterCart />
            }
        </div>
    )
}
cart.getLayout = (page) => <Layout title={"Cart"}>{page}</Layout>

export default cart
