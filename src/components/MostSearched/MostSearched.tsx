import React from 'react'
import useSWR from 'swr'
import Card from '../shared/Card'

interface Product {
  name: string
}

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url)
  // eslint-disable-next-line @typescript-eslint/return-await
  return res.json()
}

const MostSearched = (): JSX.Element => {
  const { data: products, error } = useSWR<{ results: Product[] }>(
    '/api/v2/tpn/most-searched',
    fetcher
  )

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (error) {
    return (
      <Card className="searchProducts">
        <div className="title">Most Searched Products</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          An Error Occured
        </div>
      </Card>
    )
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!products) {
    return (
      <Card className="searchProducts">
        <style>{`
          .loader {
            width: 10px;
            height: calc(100% - 57px);
            background-color: #f0f0f0;
            animation: loading 1s ease-in-out infinite;
          }
          
          @keyframes loading {
            0% {
              transform: translateX(0);
              position: absolute;
              left: 0;
              top: 55px;
            }
            // 50% {
            //   transform: translateX(100%);
            // }
            100% {
              transform: translateX(100%);
              position: absolute;
              left: 100%;
              top: 55px;
            }
          }
          
          `}</style>
        <div className="title">Most Searched Products</div>
        <div
          className="loader"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}></div>
      </Card>
    )
  }

  const productList = products?.results?.map(
    ({ name }: Product, index: number) => {
      const productNameArr = name.split('')
      let productName: any
      if (productNameArr.length > 25) {
        productNameArr.splice(15, productNameArr.length - 15, '...')
        const productNameArrToString = productNameArr.join('')
        productName = productNameArrToString
          .replaceAll('-', ' ')
          .replace(' ...', '...')
      } else {
        productName = name.replaceAll('-', ' ')
      }
      return (
        <div className="productList" key={index}>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png"
            width={48}
            height={48}
            alt=""
          />
          <div title={name.length > 25 ? name : undefined}>{productName}</div>
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
      <div className="title">Most Searched Products</div>
      {productList}
    </Card>
  )
}

export default MostSearched
