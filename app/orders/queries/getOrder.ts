import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstOrderArgs } from "db"

type GetOrderInput = Pick<FindFirstOrderArgs, "where">

export default async function getOrder({ where }: GetOrderInput, ctx: Ctx) {
  ctx.session.authorize()

  const order = await db.order.findFirst({ where })

  if (!order) throw new NotFoundError()

  return order
}
