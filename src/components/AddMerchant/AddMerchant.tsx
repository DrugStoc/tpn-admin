import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../shared/Card'
import Button from '../Button/Button'
import Motion from '../shared/Motion'

const AddMerchant = ({ arrow }: any): JSX.Element => {
  return (
    <Motion>
      <div className="addMerchant">
        <Navbar nav="Merchants" arrow={arrow} text="Add Merchants" />
        <section className="addMerchant-section">
          <div
            className="addMerchant-merchant-detail"
            style={{ width: '100%' }}>
            <Card className="card">
              <div className="cardBody">
                <h1>Add New Merchant</h1>
                <h2
                  style={{
                    color: '#939094',
                    fontSize: 22,
                    position: 'relative',
                    top: 30,
                  }}>
                  Personal Information
                </h2>
                <form>
                  <div className="form">
                    <div className="formInput">
                      <div className="inputLabel" style={{ width: '47%' }}>
                        <label htmlFor="fname" style={{ display: 'block' }}>
                          Enter your First Name
                        </label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="Ex. Nick"
                          id="fname"
                        />
                        <img
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg'
                          }
                          alt="person icon"
                        />
                      </div>
                      <div className="inputLabel" style={{ width: '47%' }}>
                        <label htmlFor="lname" style={{ display: 'block' }}>
                          Enter your Last Name
                        </label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="Ex. Jason"
                          id="lname"
                        />
                        <img
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg'
                          }
                          alt="person icon"
                        />
                      </div>
                    </div>
                    <div className="formInput">
                      <div className="inputLabel" style={{ width: '47%' }}>
                        <label htmlFor="pnumber">Enter your Phone Number</label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="+234 0000000000"
                          id="pnumber"
                        />
                        <img
                          style={{ top: 58 }}
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678674044/nigeria-flag_fbmag1.svg'
                          }
                          alt="nigeria icon"
                        />
                      </div>
                      <div
                        className="inputLabel plInput"
                        style={{ width: '47%' }}>
                        <label htmlFor="eaddress">
                          Enter your email address
                        </label>
                        <input
                          autoComplete="off"
                          type="email"
                          placeholder="example@mail.com"
                          id="eaddress"
                          alt="email icon"
                          className="addMerchantInput"
                        />
                        <img
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678674085/input-mail_tvwwz3.svg'
                          }
                          alt="email icon"
                        />
                      </div>
                    </div>
                  </div>

                  <h2
                    style={{
                      color: '#939094',
                      fontSize: 22,
                      marginTop: 30,
                      marginBottom: 10,
                    }}>
                    Pharmacy Details{' '}
                  </h2>
                  <div className="inputLabel" style={{ width: '47%' }}>
                    <label htmlFor="brand">Enter Brand Name</label>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Ex. MedLab"
                      id="brand"
                    />
                    <img
                      src={
                        'https://res.cloudinary.com/bizstak/image/upload/v1678776998/business_go9cse.svg'
                      }
                      alt="business icon"
                    />
                  </div>

                  <>
                    <h2
                      style={{
                        color: '#939094',
                        fontSize: 22,
                        position: 'relative',
                        top: 30,
                      }}>
                      Merchants Location
                    </h2>
                    {/* <p style={{ marginBlock: 20, fontWeight: 300 }}>
                      N/B: optional if not provided
                    </p> */}
                    <div className="deliveryForm">
                      <div className="form">
                        <div className="inputLabel" style={{ width: '47%' }}>
                          <label htmlFor="state">Select a state</label>
                          <input
                            autoComplete="off"
                            className="inputDelivery"
                            type="text"
                            placeholder="Select State"
                            id="state"
                          />
                          <img
                            className="arrow"
                            src={
                              'https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg'
                            }
                            alt="person icon"
                          />
                        </div>
                        <div className="inputLabel" style={{ width: '47%' }}>
                          <label htmlFor="lga">Select your LAG</label>
                          <input
                            autoComplete="off"
                            className="inputDelivery"
                            type="text"
                            placeholder="Ex. Jason"
                            id="lga"
                          />
                          <img
                            className="arrow"
                            src={
                              'https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg'
                            }
                            alt="person icon"
                          />
                        </div>
                        <div className="inputLabel" style={{ width: '47%' }}>
                          <label htmlFor="address1">Address &mdash; 1</label>
                          <input
                            autoComplete="off"
                            className="inputDelivery"
                            type="text"
                            placeholder="Ex. No9, Street name"
                            id="address1"
                          />
                        </div>
                        <div className="inputLabel" style={{ width: '47%' }}>
                          <label htmlFor="address2">
                            Address &mdash; 2 (optional)
                          </label>
                          <input
                            autoComplete="off"
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
                  <div style={{ marginTop: 70, marginBottom: 20 }}>
                    <Button
                      buttonWidth="100%"
                      buttonHeight="52px"
                      text="Add Merchant"
                      linkText="merchants"
                    />
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Motion>
  )
}

export default AddMerchant
