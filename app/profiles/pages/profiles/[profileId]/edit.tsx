import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getProfile from "app/profiles/queries/getProfile"
import updateProfile from "app/profiles/mutations/updateProfile"
import ProfileForm from "app/profiles/components/ProfileForm"

export const EditProfile = () => {
  const router = useRouter()
  const profileId = useParam("profileId", "number")
  const [profile, { mutate }] = useQuery(getProfile, { where: { id: profileId } })
  const [updateProfileMutation] = useMutation(updateProfile)

  return (
    <div>
      <h1>Edit Profile {profile.id}</h1>
      <pre>{JSON.stringify(profile)}</pre>

      <ProfileForm
        initialValues={profile}
        onSubmit={async () => {
          try {
            const updated = await updateProfileMutation({
              where: { id: profile.id },
              data: { name: "MyNewName" },
            })
            await mutate(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push("/profiles/[profileId]", `/profiles/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating profile " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditProfilePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditProfile />
      </Suspense>

      <p>
        <Link href="/profiles">
          <a>Profiles</a>
        </Link>
      </p>
    </div>
  )
}

EditProfilePage.getLayout = (page) => <Layout title={"Edit Profile"}>{page}</Layout>

export default EditProfilePage
