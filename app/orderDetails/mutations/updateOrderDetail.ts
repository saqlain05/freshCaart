import { Ctx } from "blitz"
import db, { OrderDetailUpdateArgs } from "db"

type UpdateOrderDetailInput = Pick<OrderDetailUpdateArgs, "where" | "data">

export default async function updateOrderDetail({ where, data }: UpdateOrderDetailInput, ctx: Ctx) {

  const orderDetail = await db.orderDetail.update({ where, data })

  return orderDetail
}
