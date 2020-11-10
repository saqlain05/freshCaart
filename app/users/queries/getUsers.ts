import db, {FindManyUserArgs} from 'db'
import {SessionContext} from 'blitz'

type GetUsersInput = Pick<FindManyUserArgs, "where" | "select" | "include" | "distinct" | "orderBy">

export default async function getUsers(
    {where, select, include, distinct, orderBy}:GetUsersInput
) {
    const users = await db.user.findMany({
        where,
        distinct,
        include,
        orderBy,
        select
    })

    const count = await db.user.count()
    return {
        users,
        count
    }
}