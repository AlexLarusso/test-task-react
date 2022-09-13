import React, {useContext, useReducer} from 'react'

const ModalContext = React.createContext()

export const useModal = () => {
  return useContext(ModalContext)
};

export const MODAL_TYPES = {
  DELETE: 'delete',
  UPDATE: 'update',
  ADD: 'add'
};

const SHOW_MODAL = 'show'
const HIDE_MODAL = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL: return {...state, visible: true, user: action.user, modalType: action.modalType}
    case HIDE_MODAL: return {...state, visible: false}
    default: return state
  }
}

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    modalType: '',
    user: {}
  })

  const show = (user, modalType) => dispatch({ type: SHOW_MODAL, user, modalType })
  const hide = () => dispatch({ type: HIDE_MODAL })

  return (
    <ModalContext.Provider value={{
      visible: state.visible,
      user: state.user,
      modalType: state.modalType,
      show, hide
    }}>
        { children }
    </ModalContext.Provider>
  )
}