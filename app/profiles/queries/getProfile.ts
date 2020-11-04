import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstProfileArgs } from "db"

type GetProfileInput = Pick<FindFirstProfileArgs, "where">

export default async function getProfile({ where }: GetProfileInput, ctx: Ctx) {
  ctx.session.authorize()

  const profile = await db.profile.findFirst({ where })

  if (!profile) throw new NotFoundError()

  return profile
}