import React from 'react'
const Modal = ({ paraText, closeModal }: any): JSX.Element => {
  paraText = 'Are you sure you want to delete user?'
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
