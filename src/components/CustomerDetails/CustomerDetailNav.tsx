import React from 'react'
import Card from '../shared/Card'

const CustomerDetailNav = ({
  text,
  handler,
  handlePrint,
}: any): JSX.Element => {
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
    </div>
  )
}

export default CustomerDetailNav
