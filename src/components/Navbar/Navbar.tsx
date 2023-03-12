import { useLocation, useNavigate } from 'react-router-dom'
import { navbarInterface } from './NavbarInterface'

const Nav = ({
  text,
  dayTimed,
  dayTimer,
  nav,
}: navbarInterface): JSX.Element => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]
  const handleButtonClick: any = () => {
    if (nav !== undefined) {
      navigate(`/dashboard/${nav.toLowerCase()}s`)
    } else {
      navigate('/')
    }
  }

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2
          style={{
            color: '#787579',
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
            fontSize: slug !== 'new' && isNaN(+slug) ? 24 : 16,
            cursor: 'pointer',
          }}>
          {text}
        </h2>
      </div>
      <div className="clock" style={{ fontWeight: 700, color: '#787579' }}>
        <span>{dayTimed}</span>
        <span className="dayTim">{dayTimer}</span>
      </div>
    </nav>
  )
}

export default Nav
