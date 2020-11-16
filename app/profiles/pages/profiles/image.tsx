import Layout from 'app/layouts/Layout'
import ShopImage from 'app/profiles/components/ShopImage'
import React, { Suspense } from 'react'

const image = () => {
    return (
        <div>
            <Suspense fallback="loadi">
            <ShopImage />
            </Suspense>
        </div>
    )
}
image.getLayout = (page) => <Layout title={"Profiles"}>{page}</Layout>
export default image
