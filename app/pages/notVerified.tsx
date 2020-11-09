import Phone from 'app/products/components/Phone'
import { BlitzPage, Router } from 'blitz'
import React from 'react'

const NotVerified:BlitzPage = () => {
    return (
        <div>
            <button
              onClick={() => {
                window.localStorage.setItem('flag', 'true')
                Router.push('/')
            }}
            >
                Logout
            </button>
            <Phone />
        </div>
    )
}

export default NotVerified
