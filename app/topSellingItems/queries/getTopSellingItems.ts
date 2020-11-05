import { Ctx } from "blitz"
import db, { FindManyTopSellingItemArgs } from "db"

type GetTopSellingItemsInput = Pick<
  FindManyTopSellingItemArgs,
  "where" | "orderBy" | "skip" | "take"
>

export default async function getTopSellingItems(
  { where, orderBy, skip = 0, take }: GetTopSellingItemsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const topSellingItems = await db.topSellingItem.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.topSellingItem.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    topSellingItems,
    nextPage,
    hasMore,
    count,
  }
}
