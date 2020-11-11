import {Ctx} from 'blitz'
import db, {ProfileUpsertArgs} from 'db'

type UpsertProfileInput = Pick<ProfileUpsertArgs, "where" | "create" | "include" | "select" | "update">

export default async function upsertProfile({where, include, create, select, update} : UpsertProfileInput, ctx:Ctx) {

    const profile = db.profile.upsert({ where, update, create })

    return profile
}