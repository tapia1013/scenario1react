import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';

export const StateContext = React.createContext();


export function useStateContext() {
  return useContext(StateContext);
}


export function EMProiver({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  // remove the class if mouse leaves window
  const openModalAction = () => {
    Cookies.set('modalOpenedBefore', true, { expires: 7 })
    setModalOpen(true)
  }

  // to close modal by pressing X
  const closeModalAction = () => {
    setModalOpen(false)
  }


  // const [newState, setNewState] = useState({
  //   email: '',
  //   modalOpen: false,
  //   openModalAction,
  //   closeModalAction,
  //   handleEmailInput
  // });

  const [email, setEmail] = useState('');
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }



  return (
    <StateContext.Provider value={{ modalOpen, email, handleEmailInput, openModalAction, closeModalAction }}>
      {children}
    </StateContext.Provider>
  )

}








