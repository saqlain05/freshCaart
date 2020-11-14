import db, {FindManyProductArgs, ProductWhereInput} from 'db'

type GetProductInput = Pick<FindManyProductArgs, "where" | "distinct" | "include"> & {
    search?: String
}

export default async function getProductBySearch({search, include}: GetProductInput) {
    let where: ProductWhereInput = {}
    if(search) {
        const words = search
        
        where = {
            name: {
                contains: String(words).toLowerCase(),
            }
        }
        
    }

    const products = await db.product.findMany({
        where,
        include: {category: true}
    })

    //if (products.length === 0) return {}

    return {
        products
    }
} 