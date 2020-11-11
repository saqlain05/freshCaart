import React, { createContext } from "react";

export interface ItemContextInterface {
    itemQty: number
    totalAmount: number
    localObject: object
    id: number
    show: boolean
    setShow: (show:boolean) => void
    grandQty: number
    setGrandQty: (grandQty: number) => void
    grandAmount: number
    setGrandAmount: (grandAmount: number) => void
}

const ItemContext = createContext<ItemContextInterface | null>(null)

export default ItemContext
