import { CardInterface } from './CardInterface'

const Card = ({ children, className }: CardInterface): JSX.Element => {
  const classes = `card ${className ?? ''}`
  return <div className={classes}>{children}</div>
}

export default Card
