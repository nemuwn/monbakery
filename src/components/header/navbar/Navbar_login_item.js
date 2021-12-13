import React from 'react'
import "./navbar_style.css"
import { FaUser ,FaShoppingBag } from "react-icons/fa"

function Navbar_login_item(props) {
    return (
        <div className="navbar_login_item">
            <h3>{props.name}</h3>
            <i>{props.icon == "user" ? <FaUser /> : <FaShoppingBag /> }</i>
        </div>
    )
}

export default Navbar_login_item
