import {ModalContext} from "./ModalContext";
import React, {useState} from "react";
import Modal from "../../../components/ui/modal/Modal";


function ModalProvider({children}) {
  const defaultValue = {
    isOpen: false,
    open,
    onClose
  };
  const [modal, setModal] = useState(defaultValue);

  function open(component) {
    setModal({
      ...modal,
      ...component,
      isOpen: true
    });
  }

  function onClose() {
    setModal(defaultValue);
  }

  return <ModalContext.Provider value={modal}>
    {children}
    {modal.isOpen
      ? <Modal {...modal}/>
      : null
    }
  </ModalContext.Provider>
}

export default ModalProvider;