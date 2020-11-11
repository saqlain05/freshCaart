import React, { useContext } from 'react'
import styles from '../../styles/Header.module.scss'
import { faHome,faShoppingCart,faUser,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Router, useMutation } from 'blitz';
import logout from 'app/auth/mutations/logout';
import { useCurrentUser } from 'app/hooks/useCurrentUser';
import ItemContext from 'app/contexts/ItemContext';
import { parseCookies } from 'nookies';

const Header = () => {
    const user = useCurrentUser();
    const {role} = parseCookies()
    const [logoutMutation] = useMutation(logout)
    const {grandQty} = useContext(ItemContext)
    return (
        <>
           <div className={styles.mainDiv}>
               <div className={styles.logo}>
                   <Link href="/products"><a>
                   <img className={styles.logoImg} src="http://res.cloudinary.com/dlccpotyg/image/upload/v1603447476/xianlfnpxse0t7xptsnd.png" alt="Logo Not Found"/>
                   </a></Link>
               </div>
               {user?
               <div className={styles.items}>
                   <Link  href="/products/cart">
               <a>
               <span> <div className={styles.circle}>{grandQty}</div> <FontAwesomeIcon icon={faShoppingCart} className={styles.ProfileIcons} /></span>
               
               </a>
               </Link>
               
               <div className={styles.dropdown} >
                    <button className={styles.dropbtn}><FontAwesomeIcon icon={faUserCircle} className={styles.ProfileIcons}  /></button>
                        <div  className={styles.dropdownContent}>
                            <Link href="/profiles/profile">
                            <a>Profile</a>
                            </Link>
                            <Link href="/orders/myorder">
                            <a>MyOrder</a>
                            </Link>
                            <Link href="/orders/orderhistory">
                            <a>OrderHistory</a>
                            </Link>
                            {role === 'admin' && (
                                <>
                                    <Link href="/products/admin/addPro">
                                        <a>Add Product</a>
                                    </Link>
                                    <Link href="/products/admin/manageUser">
                                        <a>ManageUser</a>
                                    </Link>
                                    <Link href="/orders/manageOrder">
                                        <a>ManageOrder</a>
                                    </Link>
                                    
                                </>
                            )}
                            {/* <a href="#">Logout</a> */}

                            <a style={{cursor:'pointer'}}
                            onClick={() => {
                                window.localStorage.setItem('flag', 'true')
                                Router.push('/')
                                //await logoutMutation()
                            }}
                            >
                            Logout
                            </a>
                            {/* <a href="#">Link 3</a> */}
                        </div>
                </div>
               

               </div>
               : 
               <div className={styles.user}>
                   <Link href="login">
               <a className={styles.userIcon}>
                   
               {/* <span> <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} /></span> */}
             Login / Register

               </a>
               </Link>
               </div>
               }
            </div> 
        </>
    )
}

export default Header
