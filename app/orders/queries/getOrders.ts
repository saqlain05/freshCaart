import { Ctx } from "blitz"
import db, { FindManyOrderArgs } from "db"

type GetOrdersInput = Pick<FindManyOrderArgs, "where" | "orderBy" | "skip" | "take">

export default async function getOrders(
  { where, orderBy, skip = 0, take }: GetOrdersInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const orders = await db.order.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.order.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    orders,
    nextPage,
    hasMore,
    count,
  }
}
