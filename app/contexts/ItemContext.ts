import React, { createContext } from "react";

export interface ItemContextInterface {
    itemQty: number
    totalAmount: number
    localObject: object
    id: number
}

const ItemContext = createContext<ItemContextInterface | null>(null)

export default ItemContext
