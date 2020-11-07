import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstProfileArgs } from "db"

type GetProfileInput = Pick<FindFirstProfileArgs, "where">

export default async function getProfile({ where }: GetProfileInput, ) {

  const profile = await db.profile.findFirst({ where })

  if (!profile) return null

  return profile
}
