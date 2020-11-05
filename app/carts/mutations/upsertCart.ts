import { Ctx } from 'blitz'
import db, {CartUpsertArgs} from 'db'

type UpsertCartInput = Pick<CartUpsertArgs, "where" | "select" | "create" | "include" | "update">

export default async function upsertCart({where, select, create, include, update}: UpsertCartInput, ctx:Ctx) {
    ctx.session.authorize()

    const cart = db.cart.upsert({ where, create, update })

    return cart
}