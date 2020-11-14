import Layout from 'app/layouts/Layout'
import React from 'react'
import Signup2 from '../components/Signup2'

const signup2 = () => {
    return (
        <div>
            <Signup2 />
            
        </div>
    )
}
signup2.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>
export default signup2
