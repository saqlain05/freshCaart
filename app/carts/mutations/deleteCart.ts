import { Ctx } from "blitz"
import db, { CartDeleteArgs } from "db"

type DeleteCartInput = Pick<CartDeleteArgs, "where">

export default async function deleteCart({ where }: DeleteCartInput, ctx: Ctx) {

  const cart = await db.cart.delete({ where })

  return cart
}
