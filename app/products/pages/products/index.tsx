import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"
import ProductList from "app/products/components/ProductList"
// import Header from "app/products/components/Header"
import FooterPrice from "app/products/components/FooterPrice"

const ProductsPage: BlitzPage = () => {
 
  return (
    <div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
        <FooterPrice />
      </Suspense>
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
