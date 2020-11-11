import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstCartArgs } from "db"

type GetCartInput = Pick<FindFirstCartArgs, "where">

export default async function getCart({ where }: GetCartInput, ctx: Ctx) {

  const cart = await db.cart.findFirst({ where })

  if (!cart) throw new NotFoundError()

  return cart
}
