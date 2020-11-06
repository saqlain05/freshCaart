import Cart from 'app/products/components/Cart'
import React from 'react'
import Layout from "app/layouts/Layout"
import FooterCart from 'app/products/components/FooterCart'
import EmptyCart from 'app/products/components/EmptyCart'
import Phone from 'app/products/components/Phone'

const cart = () => {
    return (
        <div>
            <Cart />
            <br/><br/>
            <EmptyCart />
            <Phone />
            <FooterCart />

        </div>
    )
}
cart.getLayout = (page) => <Layout title={"Cart"}>{page}</Layout>

export default cart
