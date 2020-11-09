import React from "react"
import { useRouter, BlitzPage, GetServerSideProps } from "blitz"
import Layout from "app/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import getCarts from "app/carts/queries/getCarts"
import cookie from 'js-cookie'

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

const LoginPage: BlitzPage = ({data}) => {
  const router = useRouter()
  console.log(data)
  const cartObject = {
    cart: [],
    totalQty: 0,
    totalAmount: 0
  }

  const handleLogin = (user) => {
    console.log(user)
    window.localStorage.setItem('flag', 'false')
    cookie.set('token', user.id)
    cookie.set('verified', user.verified)
    cookie.set('role', user.role)
    const lists = data.carts.filter(cart => cart.userId === user.id)
    window.localStorage.setItem('cart', JSON.stringify(cartObject))
    const basket = JSON.parse(window.localStorage.getItem('cart'))
    if(lists.length > 0) {
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
    router.push('/products') 
  }

  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
