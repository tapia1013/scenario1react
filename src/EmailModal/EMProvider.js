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



  const [showEmailError, setShowEmailError] = useState(false)

  // check if its a valid email
  const checkForEmail = (e) => {
    function emailIsValid(text) {
      return /\S+@\S+\.\S+/.test(text)
    }
    if (!emailIsValid(email)) {
      setShowEmailError(true)
    }
    console.log('checking for email');
  }

  // remove error message or validation
  const removeErrorMessage = (e) => {
    setShowEmailError(false)
    console.log('removing error message');
  }



  // form completed state
  const [formCompleted, setFormCompleted] = useState(false)

  const submittedForm = (e) => {
    e.preventDefault();

    if (showEmailError === false && email.length > 5) {
      setFormCompleted(true)

      setTimeout(() => {
        closeModalAction()
      }, 3000)
    }
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
        showEmailError,
        removeErrorMessage,
        submittedForm,
        formCompleted
      }}>
      {children}
    </StateContext.Provider>
  )

}







