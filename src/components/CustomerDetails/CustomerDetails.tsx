import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Motion from '../shared/Motion'
import CustomerDetailMain from './CustomerDetailMain'
import VoucherHistory from '../VoucherHistory/VoucherHistory'
import CustomerDetailNav from './CustomerDetailNav'
const CustomersDetail = ({ arrow }: any): JSX.Element => {
  const [text, setText] = useState('Customer Details')
  const handler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    setText((e.target as HTMLSpanElement).innerText)
  }
  return (
    <Motion>
      <div className="addCustomer">
        <Navbar
          nav="Customers"
          arrow={arrow}
          text={
            text === 'Customers Detail'
              ? 'Customers Detail'
              : text === 'Voucher History'
                ? 'Voucher History'
                : text === 'Purchase History'
                  ? 'Purchase History'
                  : 'Customer Details'
          }
        />
        <section className="addCustomer-section">
          <CustomerDetailNav text={text} handler={handler} />
          {text === 'Customer Details' ? (
            <CustomerDetailMain />
          ) : text === 'Voucher History' ? (
            <div style={{ position: 'relative', top: -155 }}>
              <VoucherHistory />
            </div>
          ) : (
            <CustomerDetailMain />
          )}
        </section>
      </div>
    </Motion>
  )
}

export default CustomersDetail
