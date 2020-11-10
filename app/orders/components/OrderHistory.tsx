import { Link } from 'blitz';
import React from 'react'
import styles from '../../styles/OrderHistory.module.scss';

const OrderHistory = ({orders}) => {
    // console.log(orders)
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
           
            <h2 className={styles.head}>Order History</h2>
                
            </div>
            {orders.map((orderss)=>(
                <>
            <div className={styles.orders} key={orderss.id}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.  </h2>
            <h2 className={styles.head1}>Order Date</h2>
            <br/>
            <h2 className={styles.head1}>Order Amount</h2>
            
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            
                <div className={styles.titleBold}>
            <h2 className={styles.head2}> 00{orderss.id} </h2>
            {/* <h2 className={styles.head2}>0015</h2> */}
           
            {/* <h2 className={styles.head2}>28 Oct 2020 10PM</h2> */}
            <h2 className={styles.head2}> {orderss.updatedAt} </h2>
        
            <h2 className={styles.head2}> {orderss.totalPrice} INR</h2>
            {/* <h2 className={styles.head2}>1785 INR</h2> */}
            {/* <h2 className={styles.head2}>14 {orderss.address}</h2> */}
            <h2 className={styles.head2}> check plz</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.headPending}>{orderss.orderStatus}</button>
            {/* <button className={styles.headDeliver}>{orderss.orderStatus}</button> */}
            {/* <button className={styles.head3}>Accept</button> */}
            {/* <button className={styles.head3}>Accept</button> */}
            {/* <button className={styles.headPending}>Pending</button> */}

            <Link href="myorder">
                <a className={styles.head4}>
                View Order Details
                </a>
            </Link>
           
            
            
            </div>
          
            
            
            </div>
            </>
            ))}
       
{/* 
            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012 </h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.headPending}>Pending</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.headDeliver}>Delivered</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

             <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>

            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div>


            <div className={styles.orders}>
            <div className={styles.title}>
            <h2 className={styles.head1}>Order No.</h2>
            <h2 className={styles.head1}>Order Date</h2>
            <h2 className={styles.head1}>Order Amount</h2>
            <h2 className={styles.head1}>Total Products</h2>
            </div>
            <div className={styles.titleBold}>
            <h2 className={styles.head2}>0012</h2>
            <h2 className={styles.head2}>28 Oct 2020 10PM</h2>
            <h2 className={styles.head2}>1785 INR</h2>
            <h2 className={styles.head2}>14</h2>
            </div>
            <div className={styles.button}>
            <button className={styles.head3}>Accept</button>
            <h2 className={styles.head4}><u>View Order Details</u></h2>
            
            </div>
            </div> */}
            
        </div>
        </>
    )
}

export default OrderHistory
