import Phone from 'app/products/components/Phone'
import { BlitzPage, Router } from 'blitz'
import React from 'react'


const NotVerified:BlitzPage = () => {
    return (
        <div style={{display:'grid', placeItems:'center', gap:'1rem', marginTop:'20%'}}>
            <h2>You Are Not a Verified User</h2>
            <h5>For Verfiy your account call given below number</h5>
            <button style={{backgroundColor:'green', color:'white', padding:'.5rem 1rem', 
            cursor:'pointer', border:'none'}}
              onClick={() => {
                window.localStorage.setItem('flag', 'true')
                Router.push('/')
            }}
            >
                Logout
            </button>
            <hr/>
            <Phone />
        </div>
    )
}

export default NotVerified
