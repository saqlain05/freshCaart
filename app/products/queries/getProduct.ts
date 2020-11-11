import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstProductArgs } from "db"

type GetProductInput = Pick<FindFirstProductArgs, "where" | "include">

export default async function getProduct({ where, include }: GetProductInput, ctx: Ctx) {
  ctx.session.authorize()

  const product = await db.product.findFirst({ where, include })

  if (!product) throw new NotFoundError()

  return product
}
