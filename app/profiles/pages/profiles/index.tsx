import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage, GetServerSideProps } from "blitz"
import Profile from "app/profiles/components/Profile"
import { parseCookies } from "nookies"

export const getServerSideProps: GetServerSideProps = async (ctx) =>  {

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
  return {
    props: {
      data : true
    }
  }
}  


export const ProfilesList = () => {
  const router = useRouter()
  // const [{ profiles, hasMore }] = usePaginatedQuery(getProfiles, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })


  return (
    <div>
     
    <Profile />
     
    </div>
  )
}

const ProfilesPage: BlitzPage = () => {
  return (
    <div>


      <Suspense fallback={<div>Loading...</div>}>
        <ProfilesList />
      </Suspense>
    </div>
  )
}

ProfilesPage.getLayout = (page) => <Layout title={"Profiles"}>{page}</Layout>

export default ProfilesPage
