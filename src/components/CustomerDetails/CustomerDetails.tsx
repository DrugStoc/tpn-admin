import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Motion from '../shared/Motion'
import CustomerDetailMain from './CustomerDetailMain'
import VoucherHistory from '../VoucherHistory/VoucherHistory'
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory'
import NavbarSub from '../Navbar/NavbarSub'
import { VoucherHistoryTableData } from '../VoucherHistory/VoucherHistoryTableData'
import { PurchaseHistoryTableData } from '../PurchaseHistory/PurchaseHistoryTableData'
const CustomersDetails = ({ arrow }: any): JSX.Element => {
  const [text, setText] = useState('Customer Details')
  const handler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    setText((e.target as HTMLSpanElement).innerText)
  }

  const tableRef = useRef<HTMLDivElement>(null)
  const handlePrint = (): void => {
    if (tableRef.current !== null) {
      const printContents = tableRef.current.innerHTML
      const newWindow = window.open('', '_blank')
      newWindow?.document.write(
        `<html><head><title>Print ${text} | DrugStoc TPN Admin</title>`
      )
      newWindow?.document.write('<style>')
      newWindow?.document.write(
        'table { border-collapse: collapse; width: 100%; font-family: sans-serif; }'
      )
      newWindow?.document.write('th, td { text-align: left; padding: 8px; }')
      newWindow?.document.write('th { background-color: #f2f2f2; }')
      newWindow?.document.write('tr:hover { background-color: #f5f5f5; }')
      newWindow?.document.write(
        'h1 { font-size: 24px; margin-top: 0; margin-bottom: 16px; }'
      )
      newWindow?.document.write(
        'p { font-size: 16px; margin-top: 0; margin-bottom: 16px; }'
      )
      newWindow?.document.write('</style></head><body>')
      newWindow?.document.write(
        `<div style="margin: 16px 0;"><h1>Customer Details: ${text}</h1><p>Here are the details of the customer's ${text.toLowerCase()}:</p></div>`
      )
      newWindow?.document.write(printContents)
      newWindow?.document.write('</body></html>')
      newWindow?.document.close()
      newWindow?.focus()
      newWindow?.print()
    }
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
          <NavbarSub
            firstItem="Customer Details"
            secondItem="Voucher History"
            thirdItem="Purchase History"
            forthItem="Suspend User"
            fifthItem="Delete Customer"
            handlePrint={handlePrint}
            VoucherHistoryTableData={VoucherHistoryTableData}
            PurchaseHistoryTableData={PurchaseHistoryTableData}
            text={text}
            handler={handler}
          />
          {text === 'Customer Details' ? (
            <div ref={tableRef} className="print-table">
              <CustomerDetailMain />
            </div>
          ) : text === 'Voucher History' ? (
            <div
              ref={tableRef}
              style={{ position: 'relative', top: -155 }}
              className="print-table">
              <VoucherHistory />
            </div>
          ) : (
            <div
              ref={tableRef}
              style={{ position: 'relative', top: -155 }}
              className="print-table">
              <PurchaseHistory />
            </div>
          )}
        </section>
      </div>
    </Motion>
  )
}

export default CustomersDetails
