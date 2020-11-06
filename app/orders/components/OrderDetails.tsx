import React from 'react'
import styles from '../../styles/OrderDetails.module.scss'

const OrderDetails = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.orders}>
            <h1 className={styles.orderHead}>Order Details</h1>  
            <div className={styles.order}>
            <h2 className={styles.orderHead1}>Quantity <span className={styles.span}>17</span></h2>            
            <h2 className={styles.orderHead1}>Amount <span className={styles.span}>1748 INR</span></h2>            
            </div>   
            <h1 className={styles.orderHead2}>Ravi General Store</h1>              
            <h1 className={styles.orderHead3}>Krishna Apartment 73 Noida</h1> 
            </div>  
<hr/>
            <div className={styles.payment}>
                <h1 className={styles.orderHead4}>Payment Options</h1>  

               <div className={styles.radio}>

                <input type="radio" name="pod" value="pod" /> 
                <span className={styles.pSpan}>Pay with <span className={styles.sSpan2}>RozarPay</span></span> <br/> <br/>
                <input type="radio" name="cod" value="cod" /> 
                <span className={styles.pSpan}>Cash On Delivary <span className={styles.sSpan2}>(COD)</span></span>
                </div> 
            </div>           
        </div>
        </>
    )
}

export default OrderDetails
