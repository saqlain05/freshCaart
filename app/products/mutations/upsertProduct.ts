import {Ctx} from 'blitz'
import db, {ProductUpsertArgs} from 'db'

type UpsertProductInput = Pick<ProductUpsertArgs, "where" | "create" | "include" | "select" | "update">

export default async function upsertProduct({where, include, create, select, update} : UpsertProductInput, ctx:Ctx) {
    ctx.session.authorize()

    const product = db.product.upsert({ where, update, create })

    return product
}