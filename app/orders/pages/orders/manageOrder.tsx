import AllOrders from 'app/orders/components/AllOrders'
import React from 'react'
import Layout from "app/layouts/Layout"
import { BlitzPage, GetServerSideProps } from 'blitz'
import { parseCookies } from 'nookies'
import getOrders from 'app/orders/queries/getOrders'

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

    const {token} = parseCookies(ctx)
    const {role} = parseCookies(ctx)
    if(!token) {
        console.log('Here')
        const {res} = ctx
        res.writeHead(302, {Location: '/login'})
        res.end()    
        return {
          props: {}
        }
    }
    else if (role !== 'admin'){
        const {res} = ctx
        res.writeHead(302, {Location: '/products'})
        res.end()
        return {
            props: {}
        }
    }
    else {
        const data = JSON.stringify(await getOrders({include: {user: {include: {profile: true}}, orderDetails: true}}))
        const data2 = (JSON.parse(data))
        const lists = data2.orders
        const orders = lists.filter(data => data.orderStatus !== 'NULL')
        return {
            props: {
                orders
            }
        }
    }
}    

const ManageOrder:BlitzPage = ({orders}) => {
    return (
        <div>
            <AllOrders orders={orders}/>
        </div>
    )
}

ManageOrder.getLayout = (page) => <Layout title={"Manage Orders"}>{page}</Layout>

export default ManageOrder
