import Cart from 'app/products/components/Cart'
import React from 'react'
import Layout from "app/layouts/Layout"

const cart = () => {
    return (
        <div>
            <Cart />
        </div>
    )
}
cart.getLayout = (page) => <Layout title={"Cart"}>{page}</Layout>

export default cart
