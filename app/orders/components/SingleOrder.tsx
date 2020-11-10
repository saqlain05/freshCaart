import { useMutation } from 'blitz'
import React, { useState } from 'react'
import updateOrder from '../mutations/updateOrder'

const SingleOrder = ({order}) => {

    const [pay, setPay] = useState(order.payStatus)
    const [ord, setOrd] = useState(order.orderStatus)
    const [updateOrderMutation] = useMutation(updateOrder)

    const handleClick = async (unit) => {
       console.log(unit)
       try {
           setPay("PAID")
           setOrd("DELIVERED")
           const event = await updateOrderMutation({
               where: {id: order.id},
               data: {
                   orderStatus: "DELIVERED",
                   payStatus: "PAID"
               }
           })
           console.log(event)
       } catch (error) {
           console.log(error)
       }
    }

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.user.name}</td>
            <td>{order.user.email}</td>
            <td>{order.user.profile.shopName}</td>
            <td>{order.totalQty}</td>
            <td>{order.totalPrice}</td>
            <td>{ord}</td>
            <td>{order.payMode}</td>
            <td>{pay}</td>
            <td>
                <button disabled={ord === 'DELIVERED' && true} onClick={() => handleClick(order)}>Change Status</button>
            </td>
        </tr>
    )
}

export default SingleOrder
