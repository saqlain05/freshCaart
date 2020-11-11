import { Ctx } from "blitz"
import db, { FindManyProfileArgs } from "db"

type GetProfilesInput = Pick<FindManyProfileArgs, "where" | "orderBy" | "skip" | "take">

export default async function getProfiles(
  { where, orderBy, skip = 0, take }: GetProfilesInput,
  ctx: Ctx
) {

  const profiles = await db.profile.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.profile.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    profiles,
    nextPage,
    hasMore,
    count,
  }
}
