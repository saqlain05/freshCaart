import logout from 'app/auth/mutations/logout'
import Layout from 'app/layouts/Layout'
import { Link } from 'blitz'
import React, { useEffect } from 'react'
import cookie from 'js-cookie'
import styles from '../styles/FrontPage.module.scss'
import DigitalRamaFooter from 'app/products/components/DigitalRamaFooter'

const index = () => {
  useEffect(() => {
    const handleLogout = async () => {
      await logout()
      cookie.remove('token')
      cookie.remove('verified')
      cookie.remove('role')
      window.localStorage.removeItem('cart')
      window.localStorage.removeItem('flag')
    }
    let value = JSON.parse(window.localStorage.getItem('flag'))
    if(value === null) value = 0
    if(value.toString() === 'true'){
      handleLogout()
    }
  }, [])
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.heading}>
          <h2>Welcome to FreshCaart</h2>
          <p>FreshCaart is specily known for Fresh Vegitable and fruits</p>
          <div className={styles.button}>
             <a href="/" className={styles.learnMore}>Learn More</a> 
            <a href="/signup" className={styles.signUp}>Signup</a> 
             <a  href="/login"  className={styles.login}>Login</a> 
          </div>
        </div>
        <div className={styles.img}>
          <img src="https://www.growthrabbit.com/wp-content/uploads/2019/02/undraw_add_to_cart_vkjp.png" alt="img" className={styles.image} />
        </div>
      </div>
      {/* <DigitalRamaFooter /> */}
    </div>

    
  )
}

index.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default index
