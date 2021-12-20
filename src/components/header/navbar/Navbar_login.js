import React, {useState} from 'react'
import Navbar_login_item from './Navbar_login_item'
import "./navbar_style.css"
import Modal from '../modal'


function Navbar_login() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className="navbar_login">
            <div onClick={() => setIsOpen(true)}>
            <Navbar_login_item  name="Нэвтрэх" icon="user" />
            </div>
            <Navbar_login_item name="Сагс" icon="basket" />
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}
        onRequestClose={() => setIsOpen(false)}>
            <div className='formLogin' >
          
          <div class="session">
            
              <div class="left">  
              </div>
              <form action="" class="log-in" autocomplete="off">
                
                  <h4>We are <span>MONBAKERY</span></h4>
                  <p>Тавтай Морил!</p>
                  <div class="floating-label">
                  <input placeholder="Email" type="text" name="email" id="email" autocomplete="off"/>
                  <label for="email">Email:</label>
                  </div>
                  <div class="floating-label">
                  <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
                  <label for="password">Password:</label>
                
                  </div>
                  <button className='loginBtn' type="submit" onClick="return false;">Log in</button>
                  
              </form>
          </div>
         
        </div> 
       
        </Modal>
        </>
    )
}

export default Navbar_login
