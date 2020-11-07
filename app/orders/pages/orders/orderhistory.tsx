import Layout from 'app/layouts/Layout'
import OrderHistory from 'app/orders/components/OrderHistory'
import React, { Suspense } from 'react'

const orderhistory = () => {
    return (
        <div>
            <Suspense fallback="loading">
            <OrderHistory />
            </Suspense>
        </div>
    )
}
orderhistory.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>
export default orderhistory
