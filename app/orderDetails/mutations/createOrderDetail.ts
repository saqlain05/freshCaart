import { Ctx } from "blitz"
import db, { OrderDetailCreateArgs } from "db"

type CreateOrderDetailInput = Pick<OrderDetailCreateArgs, "data">
export default async function createOrderDetail({ data }: CreateOrderDetailInput, ctx: Ctx) {
  ctx.session.authorize()

  const orderDetail = await db.orderDetail.create({ data })

  return orderDetail
}
