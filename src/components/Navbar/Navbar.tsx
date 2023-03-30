import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavbarInterface } from './NavbarInterface'
import { BASE_URL_V2 as V2 } from '../../config/baseURL'

const Navbar = ({ nav, text }: NavbarInterface): JSX.Element => {
  const navigate = useNavigate()
  const [greet, setGreeting] = useState()
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]
  const handleButtonClick: any = () => {
    if (nav !== undefined) {
      navigate(`/${nav?.toLowerCase()}`)
    } else {
      navigate('/')
    }
  }
  const initialUpperCase = pathArr.map((path: string) => {
    let firstWord: string = path[0]
    if (firstWord !== undefined) {
      firstWord = firstWord.toUpperCase()
    } else {
      firstWord = ''
    }
    return `${firstWord}${path.slice(1)}`
  })
  const title = initialUpperCase.join(' ')

  useEffect(() => {
    if (title.trim().length === 0) {
      document.title = 'DrugStoc TPN Admin | Home'
    } else {
      document.title = `${title} | DrugStoc TPN Admin`
    }
  }, [pathname, title])

  const [dateTime, setDateTime] = useState('')
  const [dateMonth, setDateMonth] = useState('')

  const [lastName, setLastName] = useState<string>(() => {
    const storedValue = localStorage.getItem('lastName')
    return storedValue ?? ''
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token == null) {
      setLastName('anonymous')
      return
    }

    const fetchAPI = async (): Promise<void> => {
      setLastName('Loading...')
      const response = await fetch(`${V2}/account/profile`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${token}`,
        },
      })
      const data = await response.json()
      setLastName(data?.last_name)
      localStorage.setItem('lastName', data?.last_name)
    }

    void fetchAPI()
  }, [])

  const truncatedLastName =
    lastName.length > 9 ? `${lastName.slice(0, 9)}...` : lastName

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date()
      const day = date.toLocaleDateString('en-US', { weekday: 'short' })
      const dateNum = date.getDate()
      const month = date.toLocaleDateString('en-US', { month: 'short' })
      const hour = date.getHours()
      const minute = date.getMinutes()
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const hour12 = hour % 12 !== 0 ? hour % 12 : 12
      const time = `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`
      setDateTime(`${day} ${dateNum} ${month}`)
      setDateMonth(time)

      let greeting: any
      if (hour < 12) {
        greeting = `Good Morning ${lastName === '' ? '🌄' : truncatedLastName}`
      } else if (hour < 18) {
        greeting = `Good Afternoon ${lastName === '' ? '🌅' : truncatedLastName}`
      } else {
        greeting = `Good Evening ${lastName === '' ? '🌃' : truncatedLastName}`
      }
      setGreeting(greeting)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const textDesc = text?.split(' ')
  const checkText = textDesc?.includes('Details')

  const currentText = slug.length === 0 ? greet : text

  console.log(lastName)

  return (
    <nav className="navbar">
      <div className="navbar-split">
        <h2
          style={{
            marginRight: nav !== undefined ? 3 : undefined,
            display: 'flex',
            cursor: 'pointer',
            fontSize:
              slug !== 'new' && !(checkText ?? false) ? '1.5rem' : '1rem',
            color:
              pathArr.includes('new') || (checkText ?? false)
                ? '#787579'
                : undefined,
          }}
          onClick={handleButtonClick}>
          {nav}
        </h2>
        {slug === 'new' ||
        pathArr[pathArr.length - 2] === 'orders' ||
        pathArr[pathArr.length - 2] === 'merchants' ||
        pathArr[pathArr.length - 2] === 'products' ||
        pathArr[pathArr.length - 2] === 'shippings' ||
        Boolean(pathArr.includes('customers')) ? (
          <img
            style={{
              marginInline: 10,
              display:
                currentText !== undefined
                  ? 'inline-block'
                  : currentText === 'Order List'
                    ? 'inline-block'
                    : 'none',
            }}
            src="https://res.cloudinary.com/bizstak/image/upload/v1678568018/arrow-forward_jqsrtt.svg"
            width={18}
            height={18}
            alt="person add icon"
          />
            ) : null}
        <h2
        title={lastName}
          style={{
            fontSize:
              slug !== 'new' && !(checkText ?? false) ? '1.5rem' : '1rem',
            cursor: slug !== 'new' ? 'default' : 'pointer',
          }}>
          {text === undefined ? currentText : text}
        </h2>
      </div>
      <div
        className="clock"
        style={{ fontWeight: 700, color: '#787579', gap: 12, display: 'flex' }}>
        <span>{dateTime}</span>
        <span>{dateMonth}</span>
      </div>
    </nav>
  )
}

export default Navbar
