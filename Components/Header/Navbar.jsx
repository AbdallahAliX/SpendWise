import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){

    return(
        <header className='navbar'>
            <h1 className='title'>SpendWise</h1>
            <div className='navbar-links'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/addExpense' className='nav-link'>Add Expense</Link>
                <Link to='/settings' className='nav-link'>Settings</Link>
            </div>
        </header>
    )
}