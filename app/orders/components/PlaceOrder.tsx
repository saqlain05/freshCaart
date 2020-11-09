import deleteCart from 'app/carts/mutations/deleteCart'
import updateCart from 'app/carts/mutations/updateCart'
import createOrderDetail from 'app/orderDetails/mutations/createOrderDetail'
import { Router, useMutation, useSession } from 'blitz'
import React from 'react'
import createOrder from '../mutations/createOrder'
import updateOrder from '../mutations/updateOrder'

const PlaceOrder = ({profile, userId}) => {
  console.log(userId, profile)
  const [createOrderMutation] = useMutation(createOrder)
  const [createOrderDetailMutation] = useMutation(createOrderDetail)
  const [deleteCartMutation] = useMutation(deleteCart)
  const [updateOrderMutation] = useMutation(updateOrder)

  const handleClick = async () => {
    let order = {}
    const basket = JSON.parse(window.localStorage.getItem('cart'))
    try {
      order = await createOrderMutation({
        data: {
          user: {connect: {id: userId}},
          address: profile.address,
          city: profile.city,
          phone: profile.phone,
          pinCode: profile.phone,
          totalPrice: basket.totalAmount,
          payMode: "COD"
        }
      })
      console.log(order)

      for(let i=0 ; i < basket.cart.length; i++) {
        const orderDetail = await createOrderDetailMutation({
          data: {
            order: {connect: {id: order.id}},
            goodsId: basket.cart[i].productId,
            productPrice: basket.cart[i].price,
            quantity: basket.cart[i].quantity
          }
        })
        console.log(orderDetail)
      }

      const updated = await updateOrderMutation({
        where: {id: order.id},
        data: {
          payStatus: "PENDING",
          orderStatus: "PENDING"
        }
      })

      for(let i = 0; i < basket.cart.length; i++) {
        const cart = await deleteCartMutation({
          where: {userId_productId: {userId: userId, productId: basket.cart[i].productId}}
        })
      }
      emptyStorage()
    } catch (error) {
      console.log(error)
    }
  }

  const emptyStorage = () => {
    const cartObject = {
      cart: [],
      totalQty: 0,
      totalAmount: 0
    }
    window.localStorage.setItem('cart', JSON.stringify(cartObject))
    Router.push('/orders/orderSucc')
  }
  
  return (
      <div style={{width:'60%', margin:'auto'}}>
        <button onClick = {handleClick} 
        style={{width:'100%',
        padding:'.51rem',
        fontSize: '.94rem',
        fontWeight:'800',
        backgroundColor:'green',
        color:'white',
        border:'none',
        cursor:'pointer'
        }}>Place Order</button>
      </div>
  )
}

export default PlaceOrder
