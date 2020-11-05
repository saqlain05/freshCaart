import getCarts from 'app/carts/queries/getCarts'
import { useQuery } from 'blitz'
import React from 'react'

const PrePrep = ({userId}) => {

    if(userId) {
       const [{carts}] = useQuery(getCarts, {include: {product: true}})
       const lists = carts.filter(cart => cart.userId === userId)
       console.log(lists)
       const basket = JSON.parse(window.localStorage.getItem('cart'))
       if(basket.cart.length === 0 && lists) {
        lists.forEach(list => {
          const newObject = {
            productId: list.productId,
            quantity: list.quantity,
            name: list.product.name,
            price: list.productPrice
          }
          basket.cart.push(newObject)
          basket.totalAmount += list.productPrice
          basket.totalQty += list.quantity
        })
        window.localStorage.setItem('cart', JSON.stringify(basket))
      }
    }

    return (
        <>
            
        </>
    )
}

export default PrePrep
