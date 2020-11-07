import React, { Suspense, useEffect } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, GetServerSideProps, Router } from "blitz"
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
import getProfile from "app/profiles/queries/getProfile"
import PlaceOrder from "app/orders/components/PlaceOrder"

export const getServerSideProps:GetServerSideProps = async(ctx) => {
  let profile = null
  const {token} = parseCookies(ctx)
  const data = JSON.stringify(await getProfile({where: {userId: Number(token)}}))
  if (JSON.parse(data) !== null)
    profile = JSON.parse(data)

  return {
    props: {
      userId: Number(token),
      profile
    }
  }
}

const OrdersPage: BlitzPage = ({userId, profile}) => {
  console.log(profile)

  useEffect(() => {
    if(profile === null) {
      alert('Please fill your profile')
      Router.push('/profiles')
    }
  })

  return (
    <div>
      <h1>Show profile here...</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PlaceOrder profile={profile} userId={userId}/>
      </Suspense>
    </div>
  )
}

OrdersPage.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>

export default OrdersPage
