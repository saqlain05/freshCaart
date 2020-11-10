import React from 'react'
import SingleOrder from './SingleOrder'

const AllOrders = ({orders}) => {
    return (
        <div style={{width:'90%', margin:'auto', marginTop:'1rem'}}>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Shop Name</th>
                        <th>Total Quantity</th>
                        <th>Total Price</th>
                        <th>Order Status</th>
                        <th>Payment Mode</th>
                        <th>Payment Staus</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <SingleOrder order={order} key={order.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllOrders
