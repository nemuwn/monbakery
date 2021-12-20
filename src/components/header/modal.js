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
  if (!open) return null

  return ReactDom.createPortal(
    <>
   
      <div style={OVERLAY_STYLES} >
      
        <div style={MODAL_STYLES}>
        <button className='closebtn' onClick={onClose}><CloseRoundedIcon /></button>
          {children}
        
      
        

        </div> 
        </div>
       
    </>,
    document.getElementById('portal')
  )
}