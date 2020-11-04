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
  const user = useCurrentUser()
  const [{carts}] = useQuery(getCarts, {include: {product: true}})
  console.log(carts)
  const lists = carts.filter(cart => cart.userId === user?.id)
  const basket = JSON.parse(window.localStorage.getItem('cart'))
  if(basket.cart.length === 0 && lists) {
    lists.forEach(list => {
      const newObject = {
        productId: list.productId,
        quantity: list.quantity,
        name: list.product.name,
        price: list.productPrice
      }
      basket.cart.push(newObject)
      basket.totalAmount += list.productPrice
      basket.totalQty += list.quantity
    })
    window.localStorage.setItem('cart', JSON.stringify(basket))
  }
  return (
    <> 
      <ProductList />
    </>
  )
} 

const ProductsPage: BlitzPage = () => {
  const {show, setGrandQty, setGrandAmount} = useContext(ItemContext)
  
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
