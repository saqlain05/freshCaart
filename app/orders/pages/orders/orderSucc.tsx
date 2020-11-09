import Phone from 'app/products/components/Phone'
import { BlitzPage, Link } from 'blitz'
import React from 'react'

const orderSucc:BlitzPage = () => {
    return (
        <div>
            <h2 style={{textAlign:'center', marginTop:'20%'}}>Your Order Is Successfull</h2>
            <h5 style={{textAlign:'center', margin:'1rem 0'}}>You will recieve your order on or Before
            <br/> <b>28th Oct 2020 7:30 PM</b>
            </h5>
            <h5 style={{textAlign:'center', margin:'1rem 0'}}>Your payment mode was 
            <b> Cash On Delivary</b>
            </h5>
            <div style={{ display:'grid', placeItems:'center', textAlign:'center'}}>
            <Link href="/orders/myorder">
                <a style={{backgroundColor:'green', color:'white', cursor:'pointer', width:'50vw', 
                textDecoration:'none', padding:' 0.5rem 0.5rem', borderRadius:'25px', border:'none' }}>
                    View Order Details
                </a>
            </Link>
            </div>
           <hr style={{margin: '1rem 0'}} />
            <Phone />
        </div>

    )
}

export default orderSucc
