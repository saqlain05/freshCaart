import React from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import createProfile from "app/profiles/mutations/createProfile"
import ProfileForm from "app/profiles/components/ProfileForm"

const NewProfilePage: BlitzPage = () => {
  const router = useRouter()
  const [createProfileMutation] = useMutation(createProfile)

  return (
    <div>
      <h1>Create New Profile</h1>

      <ProfileForm
        initialValues={{}}
        onSubmit={async () => {
          try {
            // const profile = await createProfileMutation({ data: { name: "MyName" } })
            // alert("Success!" + JSON.stringify(profile))
            // router.push("/profiles/[profileId]", `/profiles/${profile.id}`)
          } catch (error) {
            alert("Error creating profile " + JSON.stringify(error, null, 2))
          }
        }}
      />

      <p>
        <Link href="/profiles">
          <a>Profiles</a>
        </Link>
      </p>
    </div>
  )
}

NewProfilePage.getLayout = (page) => <Layout title={"Create New Profile"}>{page}</Layout>

export default NewProfilePage
