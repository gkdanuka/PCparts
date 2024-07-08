import './layout.scss'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../homePage/homePage'
import { Outlet } from 'react-router-dom'
    
function Layout() {
    return (
    <div className="layout">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
    )
}
export default Layout