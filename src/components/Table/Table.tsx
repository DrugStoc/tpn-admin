import React, { useState } from 'react'
import { TableInterface, tableItemInterface } from './TableInterface'
import { Link, useLocation } from 'react-router-dom'

const Table = ({
  TableData,
  columnData,
  minWidth,
  width,
}: TableInterface): JSX.Element => {
  const [selectedId, setSelectedId] = useState(false)
  const [isEditMode, setIsEditMode] = useState<null | boolean>(null)
  const [editedData, setEditedData] = useState<any>({})
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]
  const columnItems: any = columnData?.map((item: any) => {
    return <th key={item}>{item}</th>
  })

  let message: string | null
  const handleBoxClick = (id: any): void => {
    if (selectedId === id) {
      TableData.forEach((item: any) => {
        if (item.id === selectedId) {
          item.row.forEach((column: any, index: number) => {
            if (Object.prototype.hasOwnProperty.call(editedData, index)) {
              column[`column ${index + 2}`] = editedData[index]
            }
          })
        }
      })
      setSelectedId(false)
      setEditedData({})
      setIsEditMode(null)
    } else {
      setSelectedId(id)
      setIsEditMode(true)
    }
  }

  const handleInputChange = (event: any, index: any): void => {
    const newEditedData: any = { ...editedData }
    newEditedData[index] = event.target.value
    setEditedData(newEditedData)
  }

  const handleMenuClick = (id: any): any => {
    const findIndex = TableData.find((item: any) => {
      return item.id === id
    })

    return findIndex
  }

  const tableRow = TableData.map((tableItem: tableItemInterface) => {
    const isSelected = Number(selectedId) === tableItem.id
    const tableRowstyles: any = {
      backgroundColor: isSelected ? '#F9F9FC' : null,
    }
    const tableRowContent = tableItem.row.map((column: any, index: number) => {
      if (column['column 7'] === 0 && slug === 'products') {
        column['column 7'] = (
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1678576482/toggle-off_trg38c.svg"
            style={{ width: 30, height: 30 }}
            alt="toggle off button icon"
          />
        )
      } else if (column['column 7'] === 1 && slug === 'products') {
        column['column 7'] = (
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1678576466/toggle-on_yjtyea.svg"
            style={{ width: 30, height: 30 }}
            alt="toggle on button icon"
          />
        )
      } else if (
        (column['column 9'] === 0 && slug === 'customers') ||
        slug === 'orders'
      ) {
        column['column 9'] = (
          <Link
            to={
              slug === 'customers'
                ? `/customers/${tableItem.id}`
                : `/orders/${tableItem.id}`
            }
            style={{ position: 'relative', display: 'block' }}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1678576503/vertical-menu_t5swd1.svg"
              style={{
                width: 20,
                height: 20,
              }}
              alt="vertical menu icon"
              onClick={() => handleMenuClick(tableItem.id)}
            />
          </Link>
        )
      } else if (column['column 4'] === 'open') {
        return (
          <td key={index} className="open">
            {column[`column ${index + 2}`]}
          </td>
        )
      } else if (column['column 4'] === 'used') {
        return (
          <td key={index} className="used">
            {column[`column ${index + 2}`]}
          </td>
        )
      } else if (column['column 4'] === 'failed') {
        return (
          <td key={index} className="failed">
            {column[`column ${index + 2}`]}
          </td>
        )
      } else if (
        column['column 5'] === 'Failed' &&
        columnItems[4].key === 'Status'
      ) {
        column[`column ${index + 2}`] = (
          <span className="failed" style={{ width: 'calc(70% + 22px)' }}>
            {column[`column ${index + 2}`]}
          </span>
        )
        return <td key={index}>{column[`column ${index + 2}`]}</td>
      } else if (
        column['column 5'] === 'Completed' &&
        columnItems[4].key === 'Status'
      ) {
        column[`column ${index + 2}`] = (
          <span className="used" style={{ width: 'calc(70% + 22px)' }}>
            {column[`column ${index + 2}`]}
          </span>
        )
        return <td key={index}>{column[`column ${index + 2}`]}</td>
      } else if (
        column['column 4'] === 'Purchased' &&
        columnItems[3].key === 'Purchase Nature'
      ) {
        column[`column ${index + 2}`] = (
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              width: '50%',
            }}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1681050256/purchased_irmqfz.svg"
              width={16}
              height={16}
              alt="purchase icon"
            />
            <span>{column[`column ${index + 2}`]}</span>
          </div>
        )
        return (
          <td key={index}>
            {column[`column ${index + 2}`]}
          </td>
        )
      } else if (
        column['column 4'] === 'Voucher' &&
        columnItems[3].key === 'Purchase Nature'
      ) {
        column[`column ${index + 2}`] = (
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              width: '50%',
            }}>
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1681050186/voucher_luikaj.svg"
              width={16}
              height={16}
              alt="voucher icon"
            />
            <span>{column[`column ${index + 2}`]}</span>
          </div>
        )
        return (
          <td key={index}>
            {column[`column ${index + 2}`]}
          </td>
        )
      }

      if (isSelected) {
        return (
          <td key={index}>
            <input
              className="inputItem"
              style={{ backgroundColor: '#F9F9FC', color: '#514f6d' }}
              type="text"
              defaultValue={column[`column ${index + 2}`]}
              onChange={(event) => handleInputChange(event, index)}
            />
          </td>
        )
      } else {
        return <td key={index}>{column[`column ${index + 2}`]}</td>
      }
    })
    return (
      <tr key={tableItem.id} style={tableRowstyles}>
        <td>
          <img
            onClick={() => handleBoxClick(tableItem.id)}
            width={20}
            height={20}
            src={
              isSelected
                ? 'https://res.cloudinary.com/bizstak/image/upload/v1678576453/box-filled_pyagqq.svg'
                : 'https://res.cloudinary.com/bizstak/image/upload/v1678576442/box-empty_pkab1e.svg'
            }
            alt={isSelected ? 'checked box' : 'unchecked box'}
          />
        </td>
        {tableRowContent}
      </tr>
    )
  })

  message =
    isEditMode === true
      ? pathArr[pathArr.length - 2] === 'customers'
        ? (message = 'Edit/Delete')
        : (message = 'Edit')
      : isEditMode === false
        ? (message = 'Saved')
        : null

  return (
    <>
      <section
        className="tableSection"
        style={{
          width,
          top:
            typeof +slug === 'number' &&
            pathArr[pathArr.length - 2] === 'customers'
              ? // 1088 -> 58, 533 -> 80
              '80px'
              : undefined,
        }}>
        <div className="overflow">
          {message !== null && (
            <div
              style={{
                backgroundColor: 'rgba(56, 161, 105, 0.9)',
                boxShadow:
                  '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
                color: '#fff',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                position: 'absolute',
                zIndex: 21,
                width: '125px',
                top: 0,
                left: '50%',
                right: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}>
              {message}
            </div>
          )}
          <table
            style={{ minWidth: slug !== 'customers' ? minWidth : '1133px' }}
            className="table">
            <thead>
              <tr>{columnItems}</tr>
            </thead>
            <tbody>{tableRow}</tbody>
          </table>
        </div>
      </section>
    </>
  )
}

Table.defaultProps = {
  minWidth: '69.5625rem',
  width: '90%',
}

export default Table
