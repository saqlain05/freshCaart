import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstOrderDetailArgs } from "db"

type GetOrderDetailInput = Pick<FindFirstOrderDetailArgs, "where">

export default async function getOrderDetail({ where }: GetOrderDetailInput, ctx: Ctx) {

  const orderDetail = await db.orderDetail.findFirst({ where })

  if (!orderDetail) throw new NotFoundError()

  return orderDetail
}
