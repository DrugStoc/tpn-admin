interface TableInterface {
  columnData: any
  TableData: any
  minWidth: any
}

interface tableItemInterface {
  id: number
  row: Array<{
    [key: string]: string | number
  }>
}

export type { TableInterface, tableItemInterface }
