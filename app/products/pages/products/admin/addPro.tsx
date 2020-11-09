import Layout from 'app/layouts/Layout'
import AddProduct from 'app/products/components/AddProduct'
import React from 'react'

const addPro = () => {
    return (
        <div>
            <AddProduct />
        </div>
    )
}
addPro.getLayout = (page) => <Layout title={"Add Products"}>{page}</Layout>
export default addPro
