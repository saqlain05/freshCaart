import React from 'react'
import styles from '../../styles/OrderDet.module.scss'


const OrderDet = () => {
    return (
        <>
        <div className={styles.mainDiv}>

            <div className={styles.heads}>
                <div className={styles.heading}>
                    <h1 className={styles.head1}>Order Details</h1>
                    
                <div className={styles.headingg}>
                    <div className={styles.headFirst}>
                    <h1 className={styles.head2}>Order Number</h1>
                    <h1 className={styles.head2}>Order Date</h1>
                    <h1 className={styles.head2}>Order Amount</h1>
                    <h1 className={styles.head2}>Product QTY</h1>
                    </div>
                    <div className={styles.headSecond}>
                    <h1 className={styles.head3}>0021</h1>
                    <h1 className={styles.head3}>25 Oct 2020 10:25 PM</h1>
                    <h1 className={styles.head3}>1547</h1>
                    <h1 className={styles.head3}>14</h1>
                    </div>
                    </div>
                </div>

            </div>

            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.titles}>
                    <h2 className={styles.title}>Potato</h2>
                    <h2 className={styles.qty}>Order Qty <span className="qtyBold">20 KG</span></h2>
                    <h2 className={styles.qty}>Order Amount <span className="qtyBold">$ 1458</span></h2>
                </div>

            </div>
            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.titles}>
                    <h2 className={styles.title}>Potato</h2>
                    <h2 className={styles.qty}>Order Qty <span className="qtyBold">20 KG</span></h2>
                    <h2 className={styles.qty}>Order Amount <span className="qtyBold">$ 1458</span></h2>
                </div>

            </div>
            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.titles}>
                    <h2 className={styles.title}>Potato</h2>
                    <h2 className={styles.qty}>Order Qty <span className="qtyBold">20 KG</span></h2>
                    <h2 className={styles.qty}>Order Amount <span className="qtyBold">$ 1458</span></h2>
                </div>

            </div>
            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.titles}>
                    <h2 className={styles.title}>Potato</h2>
                    <h2 className={styles.qty}>Order Qty <span className="qtyBold">20 KG</span></h2>
                    <h2 className={styles.qty}>Order Amount <span className="qtyBold">$ 1458</span></h2>
                </div>

            </div>
            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="" className={styles.img}/>
                </div>
                <div className={styles.titles}>
                    <h2 className={styles.title}>Potato</h2>
                    <h2 className={styles.qty}>Order Qty <span className="qtyBold">20 KG</span></h2>
                    <h2 className={styles.qty}>Order Amount <span className="qtyBold">$ 1458</span></h2>
                </div>

            </div>
            
        </div>
        </>
    )
}

export default OrderDet
