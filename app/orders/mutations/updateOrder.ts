import { Ctx } from "blitz"
import db, { OrderUpdateArgs } from "db"

type UpdateOrderInput = Pick<OrderUpdateArgs, "where" | "data">

export default async function updateOrder({ where, data }: UpdateOrderInput) {

  const order = await db.order.update({ where, data })

  return order
}
