import React, {useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring';
import ReactDom from 'react-dom'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  color: '#000',
 
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0, 
  
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  const modalRef = useRef()
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: open ? 1 : 0,
    transform: open ? `translate(0%)` : `translate(-100%)`
  })

  // const closeModal = e =>{
  //   if (modalRef.current === e.target){
  //     setIsOpen(false);
  //   }
  // }

  if (!open) return null

  return ReactDom.createPortal(
    <>
   
      <div style={OVERLAY_STYLES}  ref={modalRef}>
      
        <div style={MODAL_STYLES}><animated.div  >
          
        
      
        <div className='formLogin' >
          
            <div class="session">
              
                <div class="left">  
                </div>
                <form action="" class="log-in" autocomplete="off">
                  <button className='closebtn' onClick={onClose}><CloseRoundedIcon /></button>
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
           </animated.div>
        </div> 
        </div>
       
    </>,
    document.getElementById('portal')
  )
}