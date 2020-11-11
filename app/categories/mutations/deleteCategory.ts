import { Ctx } from "blitz"
import db, { CategoryDeleteArgs } from "db"

type DeleteCategoryInput = Pick<CategoryDeleteArgs, "where">

export default async function deleteCategory({ where }: DeleteCategoryInput, ctx: Ctx) {

  const category = await db.category.delete({ where })

  return category
}
