import Layout from 'app/layouts/Layout'
import UserManage from 'app/products/components/UserManage'
import getUsers from 'app/users/queries/getUsers'
import { GetServerSideProps } from 'blitz'
import { parseCookies } from 'nookies'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

    const {token} = parseCookies(ctx)
    if(!token) {
        console.log('Here')
        const {res} = ctx
        res.writeHead(302, {Location: '/login'})
        res.end()    
        return {
          props: {}
        }
    }

    const data = JSON.stringify(await getUsers({}))
    const data2 = JSON.parse(data)
    const lists = data2.users
    const users = lists.filter(list => list.verified === false)
    console.log(users)
    return {
        props: {
            users
        }
    }
}

const ManageUser = ({users}) => {
    return (
        <div>
            <UserManage users={users}/>
        </div>
    )
}

ManageUser.getLayout = (page) => <Layout title={"Manage User"}>{page}</Layout>

export default ManageUser
