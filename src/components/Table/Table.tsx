/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { TableInterface } from './TableInterface'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Table = ({
  TableData,
  columnData,
  minWidth,
}: TableInterface): JSX.Element => {
  const [selectedId, setSelectedId] = useState(false)
  const [editedData, setEditedData] = useState<any>({})
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]

  const columnItems: any = columnData?.map((item: any) => {
    return <th key={item}>{item}</th>
  })

  const handleBoxClick = (id: any): void => {
    if (selectedId === id) {
      TableData.forEach((item: any) => {
        if (item.id === selectedId) {
          item.row.forEach((column: any, index: any) => {
            if (editedData.hasOwnProperty(index)) {
              column[`column ${index + 2}`] = editedData[index]
            }
          })
        }
      })
      setSelectedId(false)
      setEditedData({})
    } else {
      setSelectedId(id)
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

  const tableRow = TableData.map((tableItem: any) => {
    const isSelected = selectedId === tableItem.id
    const tableRowstyles: any = {
      backgroundColor: isSelected ? '#F9F9FC' : null,
    }
    const tableRowContent = tableItem.row.map((column: any, index: any) => {
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
      } else if (column['column 9'] === 0 && slug === 'customers') {
        column['column 9'] = (
          <Link
            to={`/customer/${tableItem.id}`}
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
      }

      if (isSelected) {
        return (
          <td key={index}>
            <input
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

  return (
    <div className="overflow">
      <table style={{ minWidth }} className="table">
        <thead>
          <tr>{columnItems}</tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </div>
  )
}

Table.defaultProps = {
  minWidth: '1065px',
}

export default Table
