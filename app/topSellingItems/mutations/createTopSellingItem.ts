import { Ctx } from "blitz"
import db, { TopSellingItemCreateArgs } from "db"

type CreateTopSellingItemInput = Pick<TopSellingItemCreateArgs, "data">
export default async function createTopSellingItem({ data }: CreateTopSellingItemInput, ctx: Ctx) {

  const topSellingItem = await db.topSellingItem.create({ data })

  return topSellingItem
}
