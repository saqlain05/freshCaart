import React from "react"
import { useRouter, BlitzPage, GetServerSideProps } from "blitz"
import Layout from "app/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { parseCookies } from "nookies"

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {
  const {token} = parseCookies(ctx)
  if(token) {
    console.log('Here')
    const {res} = ctx
    res.writeHead(302, {Location: '/products'})
    res.end()
    return {
      props: {
        data: JSON.stringify(res)
      }
    }
  }
  else {
    return { props: {}}
  }
}

const SignupPage: BlitzPage = () => {
  const router = useRouter()
  return (
    <div>
      {/* <SignupForm onSuccess={() => router.push("/login")} /> */}
      <SignupForm onSuccess={() => router.push("/signup2")} />
    </div>
  )
}

SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
