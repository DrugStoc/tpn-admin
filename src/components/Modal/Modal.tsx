import React from 'react'
import { useLocation } from 'react-router-dom'
const Modal = ({ paraText, closeModal }: any): JSX.Element => {
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  paraText =
    pathArr[pathArr.length - 2] !== 'shippings'
      ? 'Are you sure you want to delete user?'
      : "Are you sure you want to delete user's location?"
  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content">
          <p>{paraText}</p>
          <div>
            <button className="firstButton">Yes</button>
            <button className="secondButton" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
