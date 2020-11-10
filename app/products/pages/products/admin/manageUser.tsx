import Layout from 'app/layouts/Layout'
import UserManage from 'app/products/components/UserManage'
import React from 'react'

const manageUser = () => {
    return (
        <div>
            <UserManage />
        </div>
    )
}

manageUser.getLayout = (page) => <Layout title={"Manage User"}>{page}</Layout>

export default manageUser
