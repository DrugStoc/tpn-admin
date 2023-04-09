import React, { useState } from 'react'
import Card from '../shared/Card'
import { dropdownInterface } from './DropdownInterface'
const Dropdown = ({ column }: dropdownInterface): JSX.Element => {
  const [showList, setShowList] = useState(false)

  const handleButtonClick: any = (): any => {
    setShowList((prev: boolean) => {
      return !prev
    })
  }

  const dropdownList: any = column?.map((item: any) => {
    return showList ? (
      <li style={{ display: item !== 'empty' ? 'block' : 'none' }} key={item}>
        {item}
      </li>
    ) : null
  })

  return (
    <div style={{ display: column === undefined ? 'none' : 'block' }}>
      <div className="inputImg" onClick={handleButtonClick}>
        <Card className="cardDropdown">
          <span>Filter</span>
          {showList ? (
            <Card className="dropdown">
              <ul>
                <p style={{ cursor: 'default' }}>Filter By:</p>
                {dropdownList}
              </ul>
            </Card>
          ) : null}
        </Card>
      </div>
    </div>
  )
}

export default Dropdown
