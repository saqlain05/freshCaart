import React, { Suspense, useContext, useEffect } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage, GetServerSideProps } from "blitz"
import ProductList from "app/products/components/ProductList"
import FooterPrice from "app/products/components/FooterPrice"
import ItemContext from "app/contexts/ItemContext"
import getCarts from "app/carts/queries/getCarts"

export const getServerSideProps: GetServerSideProps = async () =>  {
  const carts =  JSON.stringify(await getCarts({include: {product: true}}))
  const data = JSON.parse(carts)
  console.log(data)
  return {
    props: {
      data
    }
  }
}


export const ViewCart = ({data}) => {
  
  return (
    <> 
      <ProductList data={data}/>
    </>
  )
}

const ProductsPage: BlitzPage = ({data}) => {
  const {show} = useContext(ItemContext)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ViewCart data={data}/>
        {show && (
          <FooterPrice />
        )}
      </Suspense>
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
