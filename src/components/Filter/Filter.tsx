/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import { useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { intputInterface } from '../Input/InputInterface'
import Dropdown from '../Dropdown/Dropdown'

const Filter = ({
  buttonText,
  column,
  text,
  linkText,
}: intputInterface): JSX.Element => {
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]

  return (
    <section className="inputButton">
      <style>
        {`
          @media(max-width: 1088px) {
            button {
              margin-top: 1.125rem
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
        <Input
          linkText={linkText}
          text={text}
          buttonText={null}
          column={undefined}
        />
        <Dropdown column={column} />
      </div>
      {buttonText === undefined ? null : slug === 'customers' ||
        slug === 'merchants' ||
        slug === 'orders' ||
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
