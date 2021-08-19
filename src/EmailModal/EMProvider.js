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


  // check if its a valid email
  const checkForEmail = (e) => {
    console.log('checking for email');
  }

  // remove error message or validation
  const removeErrorMessage = (e) => {
    console.log('removing error message');
  }



  return (
    <StateContext.Provider
      value={{
        modalOpen,
        email,
        handleEmailInput,
        openModalAction,
        closeModalAction,
        checkForEmail,
        removeErrorMessage
      }}>
      {children}
    </StateContext.Provider>
  )

}







