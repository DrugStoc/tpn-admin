import React, { useState } from 'react'
import Card from '../shared/Card'
import { useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'

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
  const paraText = ''

  const [showModal, setShowModal] = useState(false)

  const toggleModal = (): void => {
    if (!showModal) {
      setShowModal(true)
    }
  }

  const closeModal = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === e.currentTarget) {
      setShowModal(false)
    }
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
                    top: 0;
                    z-index: 2;
                    background-color: #fff;
                    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
                    border-radius: 4px;
                    width: 100%;
                    overflow: hidden;
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
                    cursor: pointer;
                }
                .detailMenu li:hover {
                    background-color: #f5f5f5;
                }
                @media (max-width: 966px) {
                    .customerNav .customerPrint {
                        width: 30%
                    }
                }
                @media (max-width: 533px) {
                    .menuItem {
                        top: -25px !important
                    }
                    .customerNav .customerPrint {
                        top: 9px
                    }
                    .detailMenu {
                        top: 18px
                    }
                    .card {
                        position: relative;
                        top: ${
                          text === 'Customer Details' ||
                          text === 'Merchant Details' ||
                          text === 'Product Details'
                            ? '29px'
                            : 'undefined'
                        }
                    }
                }
                @media (max-width: 442px) {
                    .customerNav .customerPrint {
                        width: 40%
                    }
                }

                @media (max-width: 384px) {
                    .customerNav .customerPrint {
                        width: 50%
                    }
                }
            `}
      </style>
      <div
        className="menuItem"
        onClick={handleMenu}
        style={{
          position: 'absolute',
          top: '-47px',
          zIndex: 20,
          cursor: 'pointer',
          backgroundColor: '#fff',
          padding: '5px',
          width: '30%',
          textAlign: 'center',
        }}>
        Menu
      </div>

      {isOpen && (
        <ul className="detailMenu">
          <li
            style={{
              backgroundColor: text === firstItem ? '#f5f5f5' : undefined,
            }}
            onClick={handler}>
            {firstItem}
          </li>
          <li
            onClick={handler}
            style={{
              display: secondItem === undefined ? 'none' : undefined,
              backgroundColor: text === secondItem ? '#f5f5f5' : undefined,
            }}>
            {secondItem}
          </li>
          <li
            onClick={handler}
            style={{
              display: thirdItem === undefined ? 'none' : undefined,
              backgroundColor: text === thirdItem ? '#f5f5f5' : undefined,
            }}>
            {thirdItem}
          </li>
          <li
            onClick={handleClick}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <span>{forthItem}</span>
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
          </li>
          <li onClick={toggleModal}>{fifthItem}</li>
        </ul>
      )}
      <div className="customerNav">
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
                  className="navlistItem"
                  src="https://res.cloudinary.com/bizstak/image/upload/v1678576466/toggle-on_yjtyea.svg"
                  width={30}
                  height={30}
                  alt="toggle on button icon"
                />
              ) : (
                <img
                  className="navlistItem"
                  src="https://res.cloudinary.com/bizstak/image/upload/v1678576482/toggle-off_trg38c.svg"
                  width={30}
                  height={30}
                  alt="toggle off button icon"
                />
              )}

              <span className="navlistItem">{forthItem}</span>
              <img
                className="navlistItem"
                src="https://res.cloudinary.com/bizstak/image/upload/v1680690573/info_nf6eom.svg"
                width={13.33}
                height={13.33}
                alt="info icon"
              />
            </div>
            <div
              className="navlistItem"
              onClick={toggleModal}
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
                className="navlistItem"
                src="https://res.cloudinary.com/bizstak/image/upload/v1678790407/delete_pya0qg.svg"
                width={20}
                height={20}
                alt="delete icon"
              />
              <span className="navlistItem">{fifthItem}</span>
            </div>
            {showModal && <Modal paraText={paraText} closeModal={closeModal} />}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default NavbarSub
