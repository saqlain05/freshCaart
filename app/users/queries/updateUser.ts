import db, {UserUpdateArgs} from 'db'

type UpdateUserInput = Pick<UserUpdateArgs, "where" | "data">

export default async function updateUser(
   {where, data}: UpdateUserInput
) {
    
    const user = await db.user.update({
        where,
        data
    })

    return user
} 