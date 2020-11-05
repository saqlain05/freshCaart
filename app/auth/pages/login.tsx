import React from "react"
import { useRouter, BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  const cartObject = {
    cart: [],
    totalQty: 0,
    totalAmount: 0
  }

  const handleLogin = () => {
    window.localStorage.setItem('cart', JSON.stringify(cartObject))
    router.push('/')
  }

  return (
    <div>
      <LoginForm onSuccess={handleLogin} />
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
