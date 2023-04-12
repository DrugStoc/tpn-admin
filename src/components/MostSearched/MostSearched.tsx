import React from 'react'
import useSWR from 'swr'
import Card from '../shared/Card'
import { dflexCenter } from '../../config/general'
import { BASE_URL_V2 as V2 } from '../../config/baseURL'

interface Product {
  name: string
  image: string
}

const fetcher = async (url: string): Promise<{ results: Product[] }> => {
  const res = await fetch(url)
  // eslint-disable-next-line @typescript-eslint/return-await
  return res.json()
}

const MostSearched = (): JSX.Element => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR<{ results: Product[] }>(`${V2}/tpn/most-searched`, fetcher)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (error) {
    return (
      <Card className="searchProducts">
        <div className="title">Most Searched Products</div>
        <div
          style={{
            ...dflexCenter,
          }}>
          An Error Occured
        </div>
      </Card>
    )
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (isLoading || !products) {
    return (
      <Card className="searchProducts">
        <div className="title">Most Searched Products</div>
        <div className="most-searched-loader"></div>
      </Card>
    )
  }

  const productList = products?.results?.map(
    ({ name, image }: Product, index: number) => {
      const productNameArr = name.split('')
      let productName: string
      if (productNameArr.length > 25) {
        productNameArr.splice(18, productNameArr.length - 15, '...')
        const productNameArrToString = productNameArr.join('')
        productName = productNameArrToString
          .replaceAll('-', ' ')
          .replace(' ...', '...')
      } else {
        productName = name.replaceAll('-', ' ')
      }
      return (
        <div className="productList" key={index}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <img
              className="productListImage"
              src={image}
              width={48}
              height={48}
              alt={name}
              onError={(e) => {
                e.currentTarget.src =
                  'https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png'
              }}
            />
            <div title={name.length > 25 ? name : undefined}>{productName}</div>
          </div>
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
      )
    }
  )

  return (
    <Card className="searchProducts">
      <div
        className="title"
        style={{ position: 'sticky', top: 0, backgroundColor: '#fff' }}>
        Most Searched Products
      </div>
      {productList}
    </Card>
  )
}

export default MostSearched
