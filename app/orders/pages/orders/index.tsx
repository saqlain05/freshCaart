import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, GetServerSideProps } from "blitz"
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
import getProfile from "app/profiles/queries/getProfile"
import PlaceOrder from "app/orders/components/PlaceOrder"

export const getServerSideProps:GetServerSideProps = async(ctx) => {

  const {token} = parseCookies(ctx)
  const data = JSON.stringify(await getProfile({where: {userId: Number(token)}}))
  const profile = JSON.parse(data)

  return {
    props: {
      userId: Number(token),
      profile
    }
  }
}

const OrdersPage: BlitzPage = ({userId, profile}) => {
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
