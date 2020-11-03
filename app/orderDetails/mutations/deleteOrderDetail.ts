import { Ctx } from "blitz"
import db, { OrderDetailDeleteArgs } from "db"

type DeleteOrderDetailInput = Pick<OrderDetailDeleteArgs, "where">

export default async function deleteOrderDetail({ where }: DeleteOrderDetailInput, ctx: Ctx) {
  ctx.session.authorize()

  const orderDetail = await db.orderDetail.delete({ where })

  return orderDetail
}
