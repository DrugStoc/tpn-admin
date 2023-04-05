import React, { useState } from 'react'
import Card from '../shared/Card'

const CustomerDetailNav = ({
  text,
  handler,
  handlePrint,
}: any): JSX.Element => {
  const [isOn, setIsOn] = useState(false)

  const handleClick = (): void => {
    setIsOn(!isOn)
  }
  return (
    <div className="customerNav">
      <div className="customerLinks">
        <span
          onClick={handler}
          style={{
            color: text === 'Customer Details' ? '#556AB0' : '#484649',
            textDecoration:
              text === 'Customer Details' ? 'underline' : undefined,
          }}>
          Customer Details
        </span>
        <span
          onClick={handler}
          style={{
            color: text === 'Voucher History' ? '#556AB0' : '#484649',
            textDecoration:
              text === 'Voucher History' ? 'underline' : undefined,
          }}>
          Voucher History
        </span>
        <span
          onClick={handler}
          style={{
            color: text === 'Purchase History' ? '#556AB0' : '#484649',
            textDecoration:
              text === 'Purchase History' ? 'underline' : undefined,
          }}>
          Purchase History
        </span>
      </div>
      {(text === 'Voucher History' || text === 'Purchase History') && (
        <Card className="customerPrint" onClick={handlePrint}>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1680539746/print_hhcgkk.png"
            width={20}
            height={20}
          />
          <span>Print File</span>
        </Card>
      )}
      {text === 'Customer Details' ? (
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

            <span>Suspend User</span>
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
            <span>Delete Customer</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CustomerDetailNav
