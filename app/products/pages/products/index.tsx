import React, { Suspense, useContext, useEffect } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage, GetServerSideProps } from "blitz"
import ProductList from "app/products/components/ProductList"
import FooterPrice from "app/products/components/FooterPrice"
import ItemContext from "app/contexts/ItemContext"
import getCarts from "app/carts/queries/getCarts"
import Loader from "app/products/components/Loader"
import { parseCookies } from "nookies"

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {
  console.log(ctx.req.headers.referer)
  const {token} = parseCookies(ctx)
  const {verified} = parseCookies(ctx)
  if(!token) {
    console.log('Here')
    const {res} = ctx
    res.writeHead(302, {Location: '/login'})
    res.end()    
    return {
      props: {
        data: JSON.stringify(res)
      }
    }
  }
  else if(verified === 'false') {
    const {res} = ctx
    res.writeHead(302, {Location: '/notVerified'})
    res.end()    
    return {
      props: {
        data: JSON.stringify(res)
      }
    }
  }
  else {
    const carts =  JSON.stringify(await getCarts({include: {product: true}}))
    const data = JSON.parse(carts)
    console.log(data)
    return {
      props: {
        data,
        url: ctx.req.headers.referer === undefined ? null : ctx.req.headers.referer
      }
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

const ProductsPage: BlitzPage = (props) => {
  let data
  data = props
  const test = useContext(ItemContext)
  return (
    <div>
      <Suspense fallback={<div> <Loader /> </div>}>
        <ViewCart data={data.data}/>
        {test?.show && (
          <FooterPrice />
        )}
      </Suspense>
    </div>
  )
}

ProductsPage.getLayout = (page) => <Layout title={"Products"}>{page}</Layout>

export default ProductsPage
