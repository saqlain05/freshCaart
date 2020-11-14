import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstProfileArgs } from "db"

type GetProfileInput = Pick<FindFirstProfileArgs, "where" | "select">

export default async function getProfile({ where, select }: GetProfileInput, ) {

  const profile = await db.profile.findFirst({ where, select: {firstName: true, maxOrderAcceptTime: true, openTime: true, phone: true, pincode: true, shopName: true, whatsapp: true, lastName: true, city: true, address: true, latitude: false, longitude: false, imageA: false, imageB: false} })

  if (!profile) return null

  return profile
}
