import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../shared/Card'
import Button from '../Button/Button'
import Motion from '../shared/Motion'

const AddShipping = ({ arrow }: any): JSX.Element => {
  return (
    <Motion>
      <div className="addShipping">
        <Navbar
          nav="Shippings"
          arrow={arrow}
          text="Add Shippings"
        />
        <section className="addShipping-section">
          <Card className="card">
            <div className="cardBody">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                <h1>Add New Shipping Location</h1>
                <div
                  className="delete"
                  style={{
                    background: '#FDFDFD',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                    borderRadius: 8,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}>
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1678790407/delete_pya0qg.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <form style={{ marginTop: 0 }}>
                <>
                  <h2
                    style={{
                      color: '#939094',
                      fontSize: 22,
                      position: 'relative',
                      top: 30,
                    }}>
                    Shipping Location
                  </h2>
                  <div className="deliveryForm">
                    <div className="form">
                      <div className="inputLabel">
                        <label htmlFor="state">Select a state</label>
                        <input
                          className="inputDelivery"
                          type="text"
                          placeholder="Select State"
                          id="state"
                        />
                        <img
                          className="arrow"
                          src="https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg"
                          alt="person icon"
                        />
                      </div>
                      <div className="inputLabel">
                        <label htmlFor="lga">Select your LAG</label>
                        <input
                          className="inputDelivery"
                          type="text"
                          placeholder="Ex. Jason"
                          id="lga"
                        />
                        <img
                          className="arrow"
                          src="https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg"
                          alt="person icon"
                        />
                      </div>
                      <div className="inputLabel">
                        <label htmlFor="address1">Address &mdash; 1</label>
                        <input
                          className="inputDelivery"
                          type="text"
                          placeholder="Ex. No9, Street name"
                          id="address1"
                        />
                      </div>
                      <div className="inputLabel">
                        <label htmlFor="address2">
                          Address &mdash; 2 (optional)
                        </label>
                        <input
                          className="inputDelivery"
                          type="text"
                          placeholder="Ex. No9, Street name"
                          id="address2"
                          alt="email icon"
                        />
                      </div>
                    </div>
                  </div>
                </>

                <>
                  <h2
                    style={{
                      color: '#939094',
                      fontSize: 22,
                      position: 'relative',
                      top: 30,
                    }}>
                    Shipping Price
                  </h2>
                  <div className="deliveryForm">
                    <div className="form">
                      <div className="inputLabel">
                        <label htmlFor="pnumber">Enter delivery price </label>
                        <input
                          style={{ textIndent: 75 }}
                          type="text"
                          placeholder="1500"
                          id="pnumber"
                        />
                        <img
                          style={{ top: 58 }}
                          src="https://res.cloudinary.com/bizstak/image/upload/v1678674044/nigeria-flag_fbmag1.svg"
                          alt="nigeria icon"
                        />
                        <p
                          style={{
                            position: 'absolute',
                            color: '#787579',
                            top: 53,
                            left: 47,
                          }}>
                          NGN
                        </p>
                      </div>
                    </div>
                  </div>
                </>

                <div style={{ marginTop: 70, marginBottom: 20 }}>
                  <Button
                    buttonWidth="100%"
                    buttonHeight="52px"
                    text="Add Shipping"
                    linkText="shippings"
                  />
                </div>
              </form>
            </div>
          </Card>
        </section>
      </div>
    </Motion>
  )
}

export default AddShipping
