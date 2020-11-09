import Layout from 'app/layouts/Layout'
import AddProduct from 'app/products/components/AddProduct'
import { GetServerSideProps } from 'blitz'
import { parseCookies } from 'nookies'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

  const {token} = parseCookies(ctx)
  const {role} = parseCookies(ctx)
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
  else if(role !== 'admin') {
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
    return {
        props: {}
    }
  }

}    

const addPro = () => {
    return (
        <div>
            <AddProduct />
        </div>
    )
}
addPro.getLayout = (page) => <Layout title={"Add Products"}>{page}</Layout>
export default addPro
