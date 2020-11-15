import Layout from 'app/layouts/Layout'
import Loader from 'app/products/components/Loader'
import ProductEdit from 'app/products/components/ProductEdit'
import getProduct from 'app/products/queries/getProduct'
import { GetServerSideProps } from 'blitz'
import React, { Suspense } from 'react'


const edit = () => {
  return (
    <div>
      <Suspense fallback={<div> <Loader /> </div>}>
      <ProductEdit />
      </Suspense>
    </div>
  )
}
edit.getLayout = (page) => <Layout title={"Edit Product"}>{page}</Layout>
export default edit
