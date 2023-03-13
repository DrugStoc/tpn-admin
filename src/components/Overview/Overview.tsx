/* eslint-disable @typescript-eslint/no-explicit-any */

import Nav from '../Navbar/Navbar'
import Filter from '../Filter/Filter'
import Card from '../shared/Card'
import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Motion from '../shared/Motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
)

interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label?: string
  data: number[]
  fill?: ChartFill
  borderColor?: string
  borderWidth?: number
  tension?: number
  pointBackgroundColor?: string
}

interface ChartFill {
  target: string
  above: string
}

const AnalyticChat = (): JSX.Element => {
  const { dayHr, day, dateNum, month, pmAM, timer } = useContext(LoginContext)
  const data1: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: {
          target: 'origin',
          above: 'rgba(249, 249, 252, 0.6)',
        },
        borderColor: '#556AB0',
        borderWidth: 3,
        tension: 0,
        pointBackgroundColor: '#556AB0',
      },
    ],
  }

  const data2: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Second Dataset',
        data: [12, 68, 90, 34, 28, 9, 13],
        fill: {
          target: 'origin',
          above: 'rgba(249, 249, 252, 0.6)',
        },
        borderColor: '#556AB0',
        borderWidth: 3,
        tension: 0,
        pointBackgroundColor: '#556AB0',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        display: false,
      },
      x: {
        beginAtZero: false,
        display: true,
      },
    },
  }

  const product = 'JAWA ARTESUNATE INJ 60mg'

  const textString = (): string => {
    const orgName = product.split('')
    if (orgName.length > 25) {
      orgName.splice(15, orgName.length - 15, '...')
      const orgNameToString = orgName.join('')
      return orgNameToString.replaceAll('-', ' ').replace(' ...', '...')
    } else {
      return product.replaceAll('-', ' ')
    }
  }

  const text = textString()
  const daytimer = `Good ${dayHr} Bello`
  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`

  return (
    <Motion>
      <div className="section">
        <Nav
          text={daytimer}
          dayTimed={dayTimer}
          dayTimer={dayTime}
          arrow={''}
          nav={undefined}
        />
        <Filter />
        <section className='fillSearch'>
          <div className="chatSearchProducts">
            <Card className="positionVertical">
              <div className="title">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1678603654/merchants_wxteou.svg"
                  alt="total merchant icon"
                />
                <span>Total Merchants</span>
              </div>
              <div>
                <div className="positionHorizontal">
                  <div className={'data'}>
                    <div className={'trends'}>
                      <span>5%</span>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                        width={20}
                        height={20}
                        alt="trending up"
                      />
                    </div>
                    <h2>100</h2>
                  </div>
                  <div className={'view'}>
                    <span>View All</span>
                    <img
                      alt="arrow steep up right icon or link icon"
                      src="https://res.cloudinary.com/bizstak/image/upload/v1678603595/view-link_wazt6b.svg"
                    />
                  </div>
                </div>
              </div>
            </Card>
            <Card className={'positionVertical'}>
              <div className={'title'}>
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1678603701/customers_no5yha.svg"
                  alt="total customers icon"
                />
                <span>Total Customers</span>
              </div>
              <div>
                <div className={'positionHorizontal'}>
                  <div className={'data'}>
                    <div className={'trends'}>
                      <span>5%</span>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                        width={20}
                        height={20}
                        alt="trending up"
                      />
                    </div>
                    <h2>100</h2>
                  </div>
                  <div className={'view'}>
                    <span>View All</span>
                    <img
                      src="https://res.cloudinary.com/bizstak/image/upload/v1678603595/view-link_wazt6b.svg"
                      alt="link icon"
                    />
                  </div>
                </div>
              </div>
            </Card>
            <Card className={'positionVertical'}>
              <div className={'title'}>
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1678603679/products_t9sv4u.svg"
                  alt="product icon"
                />
                <span>Total Products on TPN</span>
              </div>
              <div>
                <div className={'positionHorizontal'}>
                  <div className={'data'}>
                    <div className={'trends'}>
                      <span>5%</span>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                        width={20}
                        height={20}
                        alt="trending up"
                      />
                    </div>
                    <h2>100</h2>
                  </div>
                  <div className={'view'}>
                    <span>View All</span>
                    <img src="https://res.cloudinary.com/bizstak/image/upload/v1678603595/view-link_wazt6b.svg" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/*  */}
          <Card className={'searchProducts'}>
            <div className={'title'}>Most Searched Products</div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src={
                  'https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg'
                }
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className={'productList'}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className="productList">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className="productList">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className="productList">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
            <div className="productList">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
                width={48}
                height={48}
              />
              <div title={text.length > 25 ? product : undefined}>{text}</div>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg"
                width={16}
                height={16}
              />
            </div>
          </Card>
        </section>
        <section className={'chat1'}>
          <div className={'alignChart'}>
            <Line data={data1} options={options} />
          </div>
          {/* <div></div> */}
        </section>
        <section className={'chat2'} style={{ marginTop: 242 }}>
          <div className={'alignChart'}>
            <Line data={data2} options={options} />
          </div>
          {/* <div></div> */}
        </section>
        <section className={'ground'}>Product Overview</section>
      </div>
    </Motion>
  )
}

export default AnalyticChat
