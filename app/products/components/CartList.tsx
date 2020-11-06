import React from 'react'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePaginatedQuery, useRouter, BlitzPage, useQuery } from "blitz"
import getCarts from 'app/carts/queries/getCarts'
import styles from '../../styles/Cart.module.scss';
const CartList = () => {
    const [{ carts, hasMore }] = useQuery(getCarts, {
        include:{product:true}
        
      })
    //   console.log(carts)
    return (
        <div>
            {carts.map((carts) => (
            //   <h1>{carts.productPrice}</h1>
            
            <div className={styles.fulldiv} key={carts.product.id}>
                <div className={styles.image}>
                    {/* <img className={styles.img} src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SX679_.jpg" alt="Potato img" /> */}
                    <img className={styles.img} src={carts.product.imageUrl} alt="Potato img" />
                </div>
                <div className={styles.items}>
                    <div className={styles.titles}>
                    <h2 className={styles.title}> {carts.product.name} </h2>
                    <button className={styles.title1}><FontAwesomeIcon icon={faTrashAlt} className={styles.ProfileIcons} /> </button>
                    </div>
                    <div className={styles.item}>
            <p className={styles.para}>Per Kg <span className={styles.span}>$ {carts.productPrice}</span></p>
                    <div className={styles.button}>
                        <button className={styles.plus}>-</button>
                        <p className={styles.para2}> <span className={styles.span2}>{carts.quantity}</span> Kg</p>
                        <button className={styles.plus}>+</button>
                    </div>
                    
                    </div>
                    <p className={styles.para3}>(Minimum Order Quantity - <span className={styles.span3}>{carts.product.minQuantity} KG</span>)</p>
                </div>

            </div>
))}
        </div>
    )
}

export default CartList
