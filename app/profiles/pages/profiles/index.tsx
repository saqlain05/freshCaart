import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, usePaginatedQuery, useRouter, BlitzPage } from "blitz"
import getProfiles from "app/profiles/queries/getProfiles"
import Profile from "app/profiles/components/Profile"

const ITEMS_PER_PAGE = 100

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
