/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Card from '../shared/Card'

const OrderIdentity = ({
  customerName,
  customerPhoneNumber,
  customerEmail,
  time,
}: any) => {
  return (
    <div className="orderIdentity">
      <Card className="cardP">
        <div className="general">
          <h2>Purchase Made By:</h2>
          <h3>Date / Time: {time}</h3>
        </div>
        <div className="liner"></div>
        <div className="verticalAlign">
          <div className="row">
            <div className="rowFirst">Full Name</div>
            <div className="rowSecondLiner">{customerName}</div>
          </div>

          <div className="row">
            <div className="rowFirst">Phone Number</div>
            <div className="rowSecond">{customerPhoneNumber}</div>
          </div>

          <div className="row">
            <div className="rowFirst">Email Address:</div>
            <div className="rowSecond">{customerEmail}</div>
          </div>
        </div>
      </Card>

      <Card className="cardP">
        <div className="general">
          <h2>Shipping Address</h2>
        </div>
        <div className="liner"></div>
        <div className="verticalAlign">
          <div className="row">
            <div className="rowFirst">Address 1</div>
            <div className="rowSecond">29 Taiwo Street, Ogudu</div>
          </div>

          <div className="row">
            <div className="rowFirst">Address 2</div>
            <div className="rowSecond">null</div>
          </div>

          <div className="row">
            <div className="rowFirst">City / Town</div>
            <div className="rowSecond">Ikeja</div>
          </div>

          <div className="row">
            <div className="rowFirst">State</div>
            <div className="rowSecond">Lagos</div>
          </div>

          <div className="row">
            <div className="rowFirst">Additional Information</div>
            <div className="rowSecond">null</div>
          </div>
        </div>
      </Card>

      <Card className="cardP">
        <div className="general">
          <h2>Payment Mode</h2>
        </div>
        <div className="liner"></div>
        <div className="verticalAlign">
          <div className="row">
            <div className="rowFirst">Paying via: </div>
            <div
              className="rowSecond"
              style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1679846445/bank_tqtosr.svg"
                alt="bank icon"
                width={19}
                height={22}
              />
              <span>Direct bank transfer</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default OrderIdentity
