import React from 'react'

const CustomerDetailNav = ({ text, handler }: any): JSX.Element => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-30px',
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '50%',
        cursor: 'pointer',
        gap: 20,
        fontSize: '14px',
      }}>
      <span
        onClick={handler}
        style={{
          color: text === 'Customer Details' ? '#556AB0' : '#484649',
          textDecoration: text === 'Customer Details' ? 'underline' : undefined,
        }}>
        Customer Details
      </span>
      <span
        onClick={handler}
        style={{
          color: text === 'Voucher History' ? '#556AB0' : '#484649',
          textDecoration: text === 'Voucher History' ? 'underline' : undefined,
        }}>
        Voucher History
      </span>
      <span
        onClick={handler}
        style={{
          color: text === 'Purchase History' ? '#556AB0' : '#484649',
          textDecoration: text === 'Purchase History' ? 'underline' : undefined,
        }}>
        Purchase History
      </span>
    </div>
  )
}

export default CustomerDetailNav
