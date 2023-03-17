import React from 'react'
import Card from '../shared/Card'

const MostSearched = (): JSX.Element => {
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
  return (
    <Card className="searchProducts">
      <div className="title">Most Searched Products</div>
      {[...Array(15)].map((_, index) => (
        <div className="productList" key={index}>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
            width={48}
            height={48}
            alt=""
          />
          <div title={text.length > 25 ? product : undefined}>{text}</div>
          <img
            src={
              index < 8
                ? 'https://res.cloudinary.com/bizstak/image/upload/v1678603544/trending-up_lobgdn.svg'
                : 'https://res.cloudinary.com/bizstak/image/upload/v1679057058/trending-down_rd5vut.svg'
            }
            width={16}
            height={16}
            alt=""
          />
        </div>
      ))}
    </Card>
  )
}

export default MostSearched
