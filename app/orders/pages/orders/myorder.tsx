import Layout from 'app/layouts/Layout'
import OrderDet from 'app/orders/components/OrderDet'
import getOrders from 'app/orders/queries/getOrders'
import { GetServerSideProps } from 'blitz'
import { parseCookies } from 'nookies'
import React from 'react'

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

const myorder = () => {
    return (
        <div>

        </div>
    )
}
myorder.getLayout = (page) => <Layout title={"Orders"}>{page}</Layout>
export default myorder
