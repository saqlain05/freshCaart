import { Ctx } from "blitz"
import db, { TopSellingItemUpdateArgs } from "db"

type UpdateTopSellingItemInput = Pick<TopSellingItemUpdateArgs, "where" | "data">

export default async function updateTopSellingItem(
  { where, data }: UpdateTopSellingItemInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const topSellingItem = await db.topSellingItem.update({ where, data })

  return topSellingItem
}
