import { Ctx } from "blitz"
import db, { OrderDeleteArgs } from "db"

type DeleteOrderInput = Pick<OrderDeleteArgs, "where">

export default async function deleteOrder({ where }: DeleteOrderInput, ctx: Ctx) {
  ctx.session.authorize()

  const order = await db.order.delete({ where })

  return order
}
