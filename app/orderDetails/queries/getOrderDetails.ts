import { Ctx } from "blitz"
import db, { FindManyOrderDetailArgs } from "db"

type GetOrderDetailsInput = Pick<FindManyOrderDetailArgs, "where" | "orderBy" | "skip" | "take">

export default async function getOrderDetails(
  { where, orderBy, skip = 0, take }: GetOrderDetailsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const orderDetails = await db.orderDetail.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.orderDetail.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    orderDetails,
    nextPage,
    hasMore,
    count,
  }
}
