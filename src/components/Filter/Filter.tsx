import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Button from '../Button/Button'
import InputSearch from '../Input/Input'
import { intputInterface } from '../Input/InputInterface'
import Card from '../shared/Card'

const Filter = ({
  buttonText,
  column,
  text,
  linkText,
}: intputInterface): JSX.Element => {
  const [showList, setShowList] = useState(false)
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]

  const handleButtonClick: any = (): any => {
    setShowList((prev: boolean) => {
      return !prev
    })
  }

  const list = column?.map((item: any) => {
    return showList ? (
      <li style={{ display: item !== 'empty' ? 'block' : 'none' }} key={item}>
        {item}
      </li>
    ) : null
  })

  return (
    <section className="inputButton">
      <style>
        {`
          @media(max-width: 1088px) {
            button {
              margin-top: 18px
            }
          }

          @media (max-width: 1188px) and (min-width: 1089px) {
            button {
              width: 40% !important;
            }
          }
          `}
      </style>
      <div className="input">
        <InputSearch
          linkText={linkText}
          text={text}
          buttonText={null}
          column={undefined}
        />
        <div style={{ display: column === undefined ? 'none' : 'block' }}>
          <div className="inputImg" onClick={handleButtonClick}>
            <Card className="cardDropdown">
              <span>Filter</span>
              {showList ? (
                <Card className="dropdown">
                  <ul>
                    <p style={{ cursor: 'default' }}>Filter By:</p>
                    {list}
                  </ul>
                </Card>
              ) : null}
            </Card>
          </div>
        </div>
      </div>
      {buttonText === undefined ? null : slug === 'customers' ||
        slug === 'merchants' ||
        slug === 'products' ||
        slug === 'shippings' ? (
        <Button
          linkText={linkText}
          bgColor="#556AB0"
          textColor="#fff"
          text={text}
        />
      ) : (
        <Button linkText={linkText} text="Create Customer" />
      )}
    </section>
  )
}

Filter.defaultProps = {
  buttonText: undefined,
  column: undefined,
  text: undefined,
  linkText: undefined,
}

export default Filter
