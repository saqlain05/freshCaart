import OrderDet from 'app/orders/components/OrderDet'
import OrderHistory from 'app/orders/components/OrderHistory'
import OrderDetails from 'app/orders/components/OrderDetails'
import React from 'react'
import EmptyCart from 'app/products/components/EmptyCart'
import Phone from 'app/products/components/Phone'
// import PlaceOrder from 'app/orders/components/PlaceOrder'
// import OrderChange from 'app/orders/components/OrderChange'


const extra = () => {
    return (
        <div>
            {/* <OrderChange /> */}
            <OrderHistory />
            <hr style={{height:'.5rem', backgroundColor:'black'}}/>
            <OrderDet />
           <hr style={{height:'.5rem', backgroundColor:'black'}}/>
            <OrderDetails />
           <hr style={{height:'.5rem', backgroundColor:'black'}}/>
            <EmptyCart />
           <hr style={{height:'.5rem', backgroundColor:'black'}}/>
            <Phone />
            <hr/>
            {/* <PlaceOrder /> */}
        </div>
    )
}

export default extra
