import { Ctx } from "blitz"
import db, { FindManyOrderArgs } from "db"
import OrderDetails from "../components/OrderDetails"

type GetOrdersInput = Pick<FindManyOrderArgs, "where" | "orderBy" | "skip" | "take" | "include">

export default async function getOrders(
  { where, orderBy, skip = 0, take, include }: GetOrdersInput,
) {

  const orders = await db.order.findMany({
    where,
    orderBy : {updatedAt : 'desc' },
    take,
    skip,
    include
  })

  const count = await db.order.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    orders,
    nextPage,
    hasMore,
    count,
    include
  }
}
