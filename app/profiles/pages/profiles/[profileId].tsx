import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getProfile from "app/profiles/queries/getProfile"
import deleteProfile from "app/profiles/mutations/deleteProfile"

export const Profile = () => {
  const router = useRouter()
  const profileId = useParam("profileId", "number")
  const [profile] = useQuery(getProfile, { where: { id: profileId } })
  const [deleteProfileMutation] = useMutation(deleteProfile)

  return (
    <div>
      <h1>Profile {profile.id}</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>

      <Link href="/profiles/[profileId]/edit" as={`/profiles/${profile.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteProfileMutation({ where: { id: profile.id } })
            router.push("/profiles")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowProfilePage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/profiles">
          <a>Profiles</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  )
}

ShowProfilePage.getLayout = (page) => <Layout title={"Profile"}>{page}</Layout>

export default ShowProfilePage
