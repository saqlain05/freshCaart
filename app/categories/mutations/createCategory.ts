import { Ctx } from "blitz"
import db, { CategoryCreateArgs } from "db"

type CreateCategoryInput = Pick<CategoryCreateArgs, "data">
export default async function createCategory({ data }: CreateCategoryInput, ctx: Ctx) {

  const category = await db.category.create({ data })

  return category
}
