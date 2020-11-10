import Layout from 'app/layouts/Layout'
import OrderHistory from 'app/orders/components/OrderHistory'
import getOrders from 'app/orders/queries/getOrders'
import Loader from 'app/products/components/Loader'
import { GetServerSideProps } from 'blitz'
import { parseCookies } from 'nookies'
import React, { Suspense } from 'react'

export const  getServerSideProps:GetServerSideProps = async (ctx) => {
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
        const orders = await getOrders({where: {userId: Number(token)}, include: {orderDetails: true}})
        const data = JSON.stringify(orders.orders)
        return {
            props: {
                orders : JSON.parse(data)
            }
        }
    }
}

const Orderhistory = ({orders}) => {
    console.log(orders)

    return (
        <div>
            <Suspense fallback={<div> <Loader /> </div>}>
            <OrderHistory  />
            </Suspense>
        </div>
    )
}
Orderhistory.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>
export default Orderhistory
