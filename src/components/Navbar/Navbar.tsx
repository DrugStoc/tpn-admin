import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginContext from '../../context/LoginContext'
import { NavbarInterface } from './NavbarInterface'

const Navbar = ({ nav, text }: NavbarInterface): JSX.Element => {
  const navigate = useNavigate()
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
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const {
    daytimer,
    dayTimer,
    dayTime,
    dayHr,
    day,
    dateNum,
    month,
    timer,
    pmAM,
  } = useContext(LoginContext)

  useEffect(() => {
    daytimer.current = `Good ${dayHr} Bello`
    dayTimer.current = `${day} ${dateNum} ${month}`
    dayTime.current = `${timer} ${pmAM}`
  }, [pathname])

  const currentText = slug.length === 0 ? daytimer.current : text

  return (
    <nav className="navbar">
      <div className="navbar-split">
        <h2
          style={{
            marginRight: nav !== undefined ? 3 : undefined,
            display: 'flex',
            cursor: 'pointer',
            fontSize: slug !== 'new'  ? '1.5rem' : '1rem',
            color:
              pathArr.includes('new') || !isNaN(+slug) ? '#787579' : undefined,
          }}
          onClick={handleButtonClick}>
          {nav}
        </h2>
        {slug === 'new' || Boolean(pathArr.includes('customer')) ? (
          <img
            style={{
              marginInline: 10,
              display: currentText === undefined ? 'none' : 'inline-block',
            }}
            // className="img"
            src="https://res.cloudinary.com/bizstak/image/upload/v1678568018/arrow-forward_jqsrtt.svg"
            width={18}
            height={18}
            alt="person add icon"
          />
        ) : null}
        <h2
          style={{
            fontSize: slug !== 'new' ? '1.5rem' : '1rem',
            cursor: slug !== 'new' ? 'default' : 'pointer',
          }}>
          {slug === 'new' ? currentText : text}
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
