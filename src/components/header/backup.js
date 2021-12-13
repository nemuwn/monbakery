import React, {useState} from 'react'
import "./navbar_style.css"
import { FaUser ,FaShoppingBag } from "react-icons/fa"
import Modal from 'react-modal' 



// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
    
   
//     p: 4,
//   };

function Navbar_login_item(props) {
    const[modalIsOpen, setModalIsOpen] = useState(false)
   

    return (
        <>
        <div onClick={() => setModalIsOpen(true)}  className="navbar_login_item">
            <h3>{props.name}</h3>
            <i>{props.icon == "user" ? <FaUser /> : <FaShoppingBag /> }</i>
        </div>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style={
                {
                overlay: {backgroundColor: 'grey'}
                }
            }
            >
           
            <h2>modaaal ouwow</h2>
            <p>test</p> 
            <div>
                <button onClick={() => setModalIsOpen(false)}>aaaa</button>
            </div>
        </Modal>
        
        </>
    )
}

export default Navbar_login_item
