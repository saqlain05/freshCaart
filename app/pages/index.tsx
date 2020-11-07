import Layout from 'app/layouts/Layout'
import { Link } from 'blitz'
import React from 'react'
import styles from '../styles/FrontPage.module.scss'

const index = () => {
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
    </div>
  )
}

index.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default index
