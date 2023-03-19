interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label?: string
  data: number[]
  backgroundColor?: any
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

export type { ChartData }
