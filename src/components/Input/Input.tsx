import React from 'react'
import { intputInterface } from './InputInterface'
const Input = ({ buttonText }: intputInterface): JSX.Element => {
  return (
    <>
      <input
        className="inputSearch"
        style={{ width: buttonText !== undefined ? '50%' : 'initial' }}
        id="text"
        type="search"
        placeholder="Search..."
      />
      <label htmlFor="text">
        <img
          src="https://res.cloudinary.com/bizstak/image/upload/v1678557630/search_o0hnzs.svg"
          width={20}
          height={20}
          style={{ position: 'absolute', left: 10, top: 13 }}
          alt="search icon"
        />
      </label>
    </>
  )
}

export default Input
