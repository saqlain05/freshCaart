import { Ctx } from "blitz"
import db, { ProfileDeleteArgs } from "db"

type DeleteProfileInput = Pick<ProfileDeleteArgs, "where">

export default async function deleteProfile({ where }: DeleteProfileInput, ctx: Ctx) {

  const profile = await db.profile.delete({ where })

  return profile
}
