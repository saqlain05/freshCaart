import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstTopSellingItemArgs } from "db"

type GetTopSellingItemInput = Pick<FindFirstTopSellingItemArgs, "where">

export default async function getTopSellingItem({ where }: GetTopSellingItemInput, ctx: Ctx) {
  ctx.session.authorize()

  const topSellingItem = await db.topSellingItem.findFirst({ where })

  if (!topSellingItem) throw new NotFoundError()

  return topSellingItem
}
