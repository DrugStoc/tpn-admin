import Card from '../shared/Card'
import Nav from '../Navbar/Navbar'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Motion from '../shared/Motion'

const Error = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`
  return (
    <Motion>
      <div className="errorSection">
        <section>
          <Card className="errorCard">
            <Nav
              nav="Out in Space"
              arrow={null}
              dayTimed={dayTimer}
              dayTimer={dayTime}
            />

            <h1>Opps...</h1>
            <img src="https://res.cloudinary.com/bizstak/image/upload/v1678666116/404_lsr5ja.jpg" />
            <h2>
              Page not found,{' '}
              <span style={{ color: '#4B70D6' }}>Try Again</span>
            </h2>
          </Card>
        </section>
      </div>
    </Motion>
  )
}

export default Error
