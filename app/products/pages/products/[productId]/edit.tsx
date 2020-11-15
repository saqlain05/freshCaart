import Layout from 'app/layouts/Layout'
import Loader from 'app/products/components/Loader'
import ProductEdit from 'app/products/components/ProductEdit'
import getProduct from 'app/products/queries/getProduct'
import { GetServerSideProps } from 'blitz'
import React, { Suspense } from 'react'

export const getServerSideProps:GetServerSideProps = async (context) => {
  console.log("context: ", context.params)
  const check = JSON.stringify(await getProduct({where: {id: Number(context.params?.productId)}}, {}))
  console.log(check)
  const trueData = JSON.parse(check)
  console.log(trueData)
  return {
    props: {
      trueData
    }
  }
} 


const edit = (props) => {
  let data = props
  console.log(props.trueData)
  return (
    <div>
      <Suspense fallback={<div> <Loader /> </div>}>
        <ProductEdit value={data.trueData}/>
      </Suspense>
    </div>
  )
}
edit.getLayout = (page) => <Layout title={"Edit Product"}>{page}</Layout>
export default edit
