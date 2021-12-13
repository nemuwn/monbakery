import React from 'react'
import Navbar_login_item from './Navbar_login_item'
import "./navbar_style.css"

function Navbar_login() {
    return (
        <div className="navbar_login">
            <Navbar_login_item name="Нэвтрэх" icon="user" />
            <Navbar_login_item name="Сагс" icon="basket" />
        </div>
    )
}

export default Navbar_login
