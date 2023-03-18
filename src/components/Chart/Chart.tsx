import React from 'react'
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
import { ChartData } from './ChartInterface'

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

const Chart = (): JSX.Element => {
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

  return (
    <>
      <section className="firstChart">
        <div className="alignChart">
          <Line data={data1} options={options} />
        </div>
      </section>
      <section className="secondChart">
        <div className="alignChart">
          <Line data={data2} options={options} />
        </div>
      </section>
      <footer className="ground">Product Overview</footer>
    </>
  )
}

export default Chart
