import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../shared/Card'
import Motion from '../shared/Motion'
import { useParams } from 'react-router-dom'
import { OrdersTableData } from '../Orders/OrdersTableData'

const OrdersDetail = ({ arrow }: any): JSX.Element => {
  const { id }: any = useParams()
  console.log(id)
  const findId: any = OrdersTableData.find((item: any) => {
    return item.id === +id
  })

  return (
    <Motion>
      <div className="addCustomer">
        <Navbar nav="Orders" arrow={arrow} text="Order Details" />
        <section className="addCustomer-section">
          <Card className="card">
            <div className="cardBody">
              <div>
                <div className="orderDetails">
                  <div className="ownerHeader">
                    <h1>Product List</h1>
                    <h1>
                      <span>Order via:</span> {findId.row[1]['column 3']}
                    </h1>
                  </div>
                </div>
                <div className="ownerIdentity">
                  <div className="ownerId">{findId.row[0]['column 2']}</div>
                  <div className="ownerId">
                    No. of products: <span>{findId.row[5]['column 7']}</span>
                  </div>
                </div>
                <div className="liner"></div>
              </div>
              <div className="row">
                {[...Array(findId.row[5]['column 7'])].map((_, index) => {
                  return (
                    <div className="rowBtw" key={index}>
                      <div className="rowFirst">
                        <img src="https://res.cloudinary.com/bizstak/image/upload/v1679618063/panadol_mwgzos.png" />
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
              <div className="liner"></div>
              <div className="rowAmount">
                <div className="amount">Total Amount</div>
                <div className="sum">NGN {700 * findId.row[5]['column 7']}</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Motion>
  )
}

export default OrdersDetail
