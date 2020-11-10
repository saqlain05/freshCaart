import ManageOrder from 'app/orders/components/ManageOrder'
import React from 'react'
import Layout from "app/layouts/Layout"

const manageOrder = () => {
    return (
        <div>
            <ManageOrder />
        </div>
    )
}

manageOrder.getLayout = (page) => <Layout title={"Manage Orders"}>{page}</Layout>

export default manageOrder
