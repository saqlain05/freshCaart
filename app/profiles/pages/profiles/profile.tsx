import Layout from 'app/layouts/Layout'
import Loader from 'app/products/components/Loader'
import Profile from 'app/profiles/components/Profile2'
import React, { Suspense } from 'react'

const profile = () => {
    return (
        <div>
            <Suspense fallback={<div> <Loader /> </div>}>
            <Profile />
            </Suspense>
        </div>
    )
}
profile.getLayout = (page) => <Layout title={"Edit Profile"}>{page}</Layout>
export default profile
