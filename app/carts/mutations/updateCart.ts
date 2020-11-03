import { Ctx } from "blitz"
import db, { CartUpdateArgs } from "db"

type UpdateCartInput = Pick<CartUpdateArgs, "where" | "data">

export default async function updateCart({ where, data }: UpdateCartInput, ctx: Ctx) {
  ctx.session.authorize()

  const cart = await db.cart.update({ where, data })

  return cart
}
