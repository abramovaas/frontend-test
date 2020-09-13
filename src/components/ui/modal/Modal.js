import React from 'react';
import './Modal.scss';
import Button from "../button/Button";

function Modal({component: Component, onClose}) {
  return (
    <div className='modal__wrap' onClick={onClose}>
      <div className='modal' onClick={e => e.stopPropagation()}>
        <div className='modal__content'>
          <Component/>
        </div>
        <div className='modal__close-button'>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal;