import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginContext from '../../context/LoginContext'
import { NavArrowInterface } from './NavArrowInterface'

const Navbar = ({ nav }: NavArrowInterface): JSX.Element => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]
  const handleButtonClick: any = () => {
    if (nav !== undefined) {
      navigate(`/${nav.toLowerCase()}`)
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

  const text = daytimer.current
  const dayTimed = dayTimer.current
  const daysTimer = dayTime.current

  return (
    <nav className="navbar">
      <div className="navbar-split">
        <h2
          style={{
            color: 'brand.350',
            marginRight: nav !== undefined ? 3 : undefined,
            display: 'flex',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick}>
          {nav}
        </h2>
        {slug === 'new' || Boolean(pathArr.includes('customer')) ? (
          <img
            style={{
              marginInline: 10,
              display: text === undefined ? 'none' : 'inline-block',
            }}
            className="img"
            src="https://res.cloudinary.com/bizstak/image/upload/v1678568018/arrow-forward_jqsrtt.svg"
            width={18}
            height={18}
            alt="person add icon"
          />
        ) : null}
        <h2
          style={{
            fontSize: slug === '' ? 24 : 16,
            cursor: slug === '' ? 'default' : 'pointer',
          }}>
          {text}
        </h2>
      </div>
      <div
        className="clock"
        style={{ fontWeight: 700, color: '#787579', gap: 10, display: 'flex' }}>
        <span>{dayTimed}</span>
        <span>{daysTimer}</span>
      </div>
    </nav>
  )
}

export default Navbar
