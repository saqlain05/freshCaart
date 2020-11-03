import { Ctx } from "blitz"
import db, { TopSellingItemDeleteArgs } from "db"

type DeleteTopSellingItemInput = Pick<TopSellingItemDeleteArgs, "where">

export default async function deleteTopSellingItem({ where }: DeleteTopSellingItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const topSellingItem = await db.topSellingItem.delete({ where })

  return topSellingItem
}
