import { Ctx } from "blitz"
import db, { ProductUpdateArgs } from "db"

type UpdateProductInput = Pick<ProductUpdateArgs, "where" | "data">

export default async function updateProduct({ where, data }: UpdateProductInput, ctx?: Ctx) {

  const product = await db.product.update({ where, data })

  return product
}
