import { Ctx } from "blitz"
import db, { ProfileCreateArgs } from "db"

type CreateProfileInput = Pick<ProfileCreateArgs, "data">
export default async function createProfile({ data }: CreateProfileInput, ctx: Ctx) {
  ctx.session.authorize()

  const profile = await db.profile.create({ data })

  return profile
}
