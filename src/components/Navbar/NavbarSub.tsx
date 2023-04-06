import React, { useState } from 'react'
import Card from '../shared/Card'
import { useLocation } from 'react-router-dom'

const NavbarSub = ({
  text,
  handler,
  handlePrint,
  firstItem,
  secondItem,
  thirdItem,
  forthItem,
  fifthItem,
}: any): JSX.Element => {
  const [isOn, setIsOn] = useState(false)
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const handleClick = (): void => {
    setIsOn(!isOn)
  }
  return (
    <div className="customerNav">
      <div className="customerLinks">
        <span
          onClick={handler}
          style={{
            color: text === firstItem ? '#556AB0' : '#484649',
            textDecoration: text === firstItem ? 'underline' : undefined,
          }}>
          {firstItem}
        </span>
        <span
          onClick={handler}
          style={{
            color: text === secondItem ? '#556AB0' : '#484649',
            textDecoration: text === secondItem ? 'underline' : undefined,
          }}>
          {secondItem}
        </span>
        <span
          onClick={handler}
          style={{
            color: text === thirdItem ? '#556AB0' : '#484649',
            textDecoration: text === thirdItem ? 'underline' : undefined,
          }}>
          {thirdItem}
        </span>
      </div>
      {(text === secondItem || text === thirdItem) &&
        pathArr.includes('customers') && (
          <Card className="customerPrint" onClick={handlePrint}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1680539746/print_hhcgkk.png"
              width={20}
              height={20}
            />
            <span>Print File</span>
          </Card>
      )}
      {text === firstItem ? (
        <div
          style={{
            gap: 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '14px',
            position: 'relative',
            top: -7,
          }}>
          <div
            onClick={handleClick}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}>
            {isOn ? (
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678576466/toggle-on_yjtyea.svg"
                width={30}
                height={30}
                alt="toggle on button icon"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678576482/toggle-off_trg38c.svg"
                width={30}
                height={30}
                alt="toggle off button icon"
              />
            )}

            <span>{forthItem}</span>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1680690573/info_nf6eom.svg"
              width={13.33}
              height={13.33}
            />
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              padding: '5px 20px',
              gap: 8,
              cursor: 'pointer',
            }}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1678790407/delete_pya0qg.svg"
              width={20}
              height={20}
              alt="delete icon"
            />
            <span>{fifthItem}</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NavbarSub
