import React, { Suspense, useContext } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage, useQuery, useSession } from "blitz"
import ProductList from "app/products/components/ProductList"
// import Header from "app/products/components/Header"
import FooterPrice from "app/products/components/FooterPrice"
import ItemContext from "app/contexts/ItemContext"
import getCart from "app/carts/queries/getCart"
import getCarts from "app/carts/queries/getCarts"
import { useCurrentUser } from "app/hooks/useCurrentUser"

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
