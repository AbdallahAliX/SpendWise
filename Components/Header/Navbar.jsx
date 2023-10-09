import React from 'react'
import './Navbar.css'

export default function Navbar(){

    return(
        <header className='navbar'>
            <h1 className='title'>SpendWise</h1>
            <div className='navbar-links'>
                <p className='nav-link'>Home</p>
                <p className='nav-link'>Add Expense</p>
                <p className='nav-link'>Settings</p>
            </div>
        </header>
    )
}