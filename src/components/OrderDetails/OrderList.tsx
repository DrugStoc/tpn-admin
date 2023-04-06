import React from 'react'
import Card from '../shared/Card'

const OrderList = ({ pharmacist, orderId, orderQty }: any): JSX.Element => {
  const amount = 700 * orderQty
  return (
    <>
      <style>
        {`
        .orderList {
          width: 61%
        }

        @media (max-width: 1088px) {
          .orderList {
            width: 100%
          }
        }
        `}
      </style>
      <div className="orderList">
        <Card className="card">
          <div className="cardBody">
            <div>
              <div className="orderDetails">
                <div className="ownerHeader">
                  <h1>Product List</h1>
                  <h1>
                    <span>Order via:</span> {pharmacist}
                  </h1>
                </div>
              </div>
              <div className="ownerIdentity">
                <div className="ownerId">{orderId}</div>
                <div className="ownerId">
                  No. of products: <span>{orderQty}</span>
                </div>
              </div>
              <div className="liner"></div>
            </div>
            <div className="overflow">
              <div className="row">
                {[...Array(orderQty)].map((_, index) => {
                  return (
                    <div className="rowBtw" key={index}>
                      <div className="rowFirst">
                        <img
                          src="https://res.cloudinary.com/bizstak/image/upload/v1679618063/panadol_mwgzos.png"
                          alt="panadol in blue sachet"
                        />
                        <div className="productDetail">
                          <h3>Panadol</h3>
                          <h4 className="productDescription">
                            Acephen, Mapap, Q-Pap, and Tylenol Used for Pain and
                            Fever
                          </h4>
                          <h4 className="productComposition">
                            325mg Acetaminophen (30 tablets)
                          </h4>
                        </div>
                      </div>
                      <div className="rowPrice">NGN 700</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="liner"></div>
            <div className="rowAmount">
              <div className="amount">Total Amount:</div>
              <div className="sum">NGN {amount.toLocaleString()}</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default OrderList
