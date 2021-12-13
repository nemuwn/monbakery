import React, {useState} from 'react'
import "./navbar_style.css"
import { FaUser ,FaShoppingBag } from "react-icons/fa"
import Modal from '../modal'


function Navbar_login_item(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div onClick={() => setIsOpen(true)} className="navbar_login_item">
            <h3>{props.name}</h3>
            <i>{props.icon == "user" ? <FaUser /> : <FaShoppingBag /> }</i>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}
        onRequestClose={() => setIsOpen(false)}>
       
        </Modal>
        
        </>
    )
}

export default Navbar_login_item
