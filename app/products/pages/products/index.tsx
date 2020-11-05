import React, { Suspense, useContext, useEffect } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"
import ProductList from "app/products/components/ProductList"
import FooterPrice from "app/products/components/FooterPrice"
import ItemContext from "app/contexts/ItemContext"

export const ViewCart = () => {
  
  return (
    <> 
      <ProductList />
    </>
  )
}

const ProductsPage: BlitzPage = () => {
  const {show} = useContext(ItemContext)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ViewCart />
        {show && (
          <FooterPrice />
        )}
      </Suspense>
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
