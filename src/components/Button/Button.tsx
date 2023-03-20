import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { buttonInterface } from './ButtonInterface'

const Button = ({
  textColor,
  text,
  bgColor,
  buttonWidth,
  buttonBorderRadius,
  buttonBorder,
  fontSize,
  buttonHeight,
  fontWeight,
  fontFamily,
  linkText,
  type,
}: buttonInterface): JSX.Element => {
  const navigate = useNavigate()
  const handleButtonClick = (): any => {
    if (text !== undefined || text !== null) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      navigate(`/${linkText?.toLowerCase()}/new`)
    } else {
      navigate('/')
    }
  }

  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]

  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    width: buttonWidth,
    borderRadius: buttonBorderRadius,
    border: buttonBorder,
    fontSize,
    cursor: 'pointer',
    height: buttonHeight,
    fontWeight,
    fontFamily,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  }
  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={slug !== 'new' ? handleButtonClick : undefined}>
      {linkText === '' || buttonWidth === '100%' ? null : slug === 'products' ||
        slug === 'shippings' ? (
        <img
          className="personImage"
          src="https://res.cloudinary.com/bizstak/image/upload/v1678557170/add-product_vcm0hk.svg"
          alt="button"
        />
          ) : slug === 'orders' ? (
        <img
          src="https://res.cloudinary.com/bizstak/image/upload/v1679248641/place-orders_qt3bad.svg"
          alt=""
        />
          ) : (
        <img
          className="personImage"
          src="https://res.cloudinary.com/bizstak/image/upload/v1678557226/person_almamy.svg"
          alt="button"
        />
          )}
      <span style={{ color: textColor }}>{text}</span>
    </button>
  )
}

Button.defaultProps = {
  buttonWidth: '30%',
  buttonHeight: 38,
  buttonBorderRadius: 4,
  textColor: '#000',
  bgColor: '#D9D9D9',
  buttonBorder: '0.0625rem solid #D9D9D9',
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'Poppins',
  type: 'submit',
}

export default Button
