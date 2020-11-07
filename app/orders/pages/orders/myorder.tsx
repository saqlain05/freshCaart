import Layout from 'app/layouts/Layout'
import OrderDet from 'app/orders/components/OrderDet'
import React from 'react'

const myorder = () => {
    return (
        <div>
            <OrderDet />
        </div>
    )
}
myorder.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>
export default myorder
