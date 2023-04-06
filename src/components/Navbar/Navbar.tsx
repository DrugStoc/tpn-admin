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
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <style>
        {`
                @media (min-width: 1110px) {
                    .detailMenu, .menuItem {
                        display: none ;
                    }
                }
                .detailMenu {
                    list-style-type: none;
                    position: absolute;
                    top: 0px;
                    z-index: 1;
                    background-color: #fff;
                    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
                    border-radius: 4px;
                    width: 40%;
                }
                .detailMenu li:first-of-type:hover {
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px
                }
                .detailMenu li:last-of-type:hover {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px
                }
                .detailMenu li {
                    padding: 10px;
                }
                .detailMenu li:hover {
                    background-color: #f5f5f5;
                }
            `}
      </style>
      <div
        className="menuItem"
        onClick={handleMenu}
        style={{
          position: 'absolute',
          top: '-50px',
          zIndex: 20,
          cursor: 'pointer',
          backgroundColor: '#fff',
          padding: '10px',
          width: '15%',
          textAlign: 'center',
        }}>
        Menu
      </div>

      {isOpen && (
        <ul className="detailMenu">
          <li onClick={handler}>{firstItem}</li>
          <li onClick={handler}>{secondItem}</li>
          <li onClick={handler}>{thirdItem}</li>
          <li onClick={handler}>{forthItem}</li>
          <li onClick={handler}>{fifthItem}</li>
        </ul>
      )}
      <div className="customerNav" style={{ position: 'relative' }}>
        <div className="customerLinks">
          <span
            className="navlistItem"
            onClick={handler}
            style={{
              color: text === firstItem ? '#556AB0' : '#484649',
              textDecoration: text === firstItem ? 'underline' : undefined,
            }}>
            {firstItem}
          </span>
          <span
            className="navlistItem"
            onClick={handler}
            style={{
              color: text === secondItem ? '#556AB0' : '#484649',
              textDecoration: text === secondItem ? 'underline' : undefined,
            }}>
            {secondItem}
          </span>
          <span
            className="navlistItem"
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
                alt="printer icon"
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

              <span className="navlistItem">{forthItem}</span>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1680690573/info_nf6eom.svg"
                width={13.33}
                height={13.33}
                alt="info icon"
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
              <span className="navlistItem">{fifthItem}</span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default NavbarSub
