import React, { Suspense, useEffect } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, GetServerSideProps, Router } from "blitz"
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
import getProfile from "app/profiles/queries/getProfile"
import PlaceOrder from "app/orders/components/PlaceOrder"
import Loader from "../../../../app/products/components/Loader"
import Phone from "app/products/components/Phone"
import LoaderTwo from "../../../../app/products/components/LoaderTwo"

export const getServerSideProps:GetServerSideProps = async(ctx) => {
  let profile = null
  const {token} = parseCookies(ctx)
  const {verified} = parseCookies(ctx)

  if(!token) {
    console.log('Here')
    const {res} = ctx
    res.writeHead(302, {Location: '/login'})
    res.end()
    return {
      props: {
      }
    }
  }

  else if(verified === 'false') {
    const {res} = ctx
    res.writeHead(302, {Location: '/notVerified'})
    res.end()    
    return {
      props: {
        
      }
    }
  }

  const data = JSON.stringify(await getProfile({where: {userId: Number(token)}}))
  if (JSON.parse(data) !== null)
    profile = JSON.parse(data)
  console.log(profile)  

  return {
    props: {profile}
  }
}

const OrdersPage: BlitzPage = (props) => {
  console.log(props)
  let value
  value = props
  if(value.profile === null) {
    alert('please complete your profile')
    Router.push('/profiles')
  } 
  const {token} = parseCookies()
  const userId = token
  return (
    <div>
      {value.profile!==null && (
        <Suspense fallback={<div> <LoaderTwo /> </div>}>
          <div style={{width:'75%', margin:'auto', marginTop:'10%'}}>
          <h1 style={{margin: '1rem 0'}}> Order Details </h1>
            <h2 style={{margin: '1rem 0', textTransform:'capitalize'}}><b>{value.profile.shopName} </b></h2>
            <p style={{margin: '1rem 0'}}>{value.profile.address}, {value.profile.city} </p>
            <p style={{margin: '1rem 0'}}>Payment Mode - <b>Cash On Delivary</b> (COD) </p>
          </div>
          
          <PlaceOrder profile={value.profile} userId={userId}/>
          <hr style={{margin:'1rem 0 '}} />
          <Phone />
        </Suspense>
      )}    
    </div>
  )
}

OrdersPage.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>

export default OrdersPage
