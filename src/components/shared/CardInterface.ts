interface CardInterface {
  children: React.ReactNode
  className?: string
  ref?: React.RefObject<HTMLDivElement>
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export type { CardInterface }
