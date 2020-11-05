import { Ctx } from "blitz"
import db, { CartCreateArgs } from "db"

type CreateCartInput = Pick<CartCreateArgs, "data">
export default async function createCart({ data }: CreateCartInput, ctx: Ctx) {
  ctx.session.authorize()

  const cart = await db.cart.create({ data })

  return cart
}
