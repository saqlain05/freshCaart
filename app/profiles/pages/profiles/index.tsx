import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, GetServerSideProps } from "blitz"
import Profile from "app/profiles/components/Profile"
import { parseCookies } from "nookies"
import getProfile from "app/profiles/queries/getProfile"
import Profile2 from "app/profiles/components/Profile2"

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

  console.log(ctx.req.headers.referer)
  const {token} = parseCookies(ctx)
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
  const check = JSON.stringify(await getProfile({where: {userId: Number(token)}}))
  return {
    props: {
      data : JSON.parse(check) === null ? true : false,
      url: ctx.req.headers.referer === undefined ? 'test' : ctx.req.headers.referer
    }
  }
}  


export const ProfilesList = ({url}) => {
  console.log(url)
  const router = useRouter()
  
  return (
    <div>
      <Profile url={url}/>
    </div>
  )
}

const ProfilesPage: BlitzPage = (props) => {
  let url
  url = props
  console.log(url.url)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {url.data ? <ProfilesList url={url.url}/> : <Profile2 /> }
        
      </Suspense>
    </div>
  )
}

ProfilesPage.getLayout = (page) => <Layout title={"Profiles"}>{page}</Layout>

export default ProfilesPage
