import { useContext, useState } from 'react'
import Nav from '../Navbar/Navbar'
import LoginContext from '../../context/LoginContext'
import Card from '../shared/Card'
import Button from '../Button/Button'
import Motion from '../shared/Motion'

const AddCustomer = ({ arrow }: any): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const [state, setState] = useState<boolean>(false)

  const handleButtonClick = (): any => {
    if (!state) {
      setState(true)
    } else {
      setState(false)
    }
  }

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`
  return (
    <Motion>
      <div className="addCustomer">
        <Nav
          dayTimed={dayTimer}
          dayTimer={dayTime}
          nav="Customers"
          arrow={arrow}
          text="Add Customers"
        />
        <section className="addCustomer-section">
          <Card className="card">
            <div className="cardBody">
              <h1>Add New Customer</h1>
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
                  <div className="inputLabel">
                    <label htmlFor="fname">Enter your First Name</label>
                    <input type="text" placeholder="Ex. Nick" id="fname" />
                    <img
                      src={
                        'https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg'
                      }
                      alt="person icon"
                    />
                  </div>
                  <div className="inputLabel">
                    <label htmlFor="lname">Enter your Last Name</label>
                    <input type="text" placeholder="Ex. Jason" id="lname" />
                    <img
                      src={
                        'https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg'
                      }
                      alt="person icon"
                    />
                  </div>
                  <div className="inputLabel">
                    <label htmlFor="pnumber">Enter your Phone Number</label>
                    <input
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
                  <div className="inputLabel">
                    <label htmlFor="eaddress">Enter your email address</label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      id="eaddress"
                      alt="email icon"
                    />
                    <img
                      src={
                        'https://res.cloudinary.com/bizstak/image/upload/v1678674085/input-mail_tvwwz3.svg'
                      }
                      alt="email icon"
                    />
                  </div>
                </div>

                {!state ? (
                  <div className="addDelivery">
                    <button onClick={handleButtonClick}>
                      <img
                        src={
                          'https://res.cloudinary.com/bizstak/image/upload/v1678674138/button-plus_aernbb.svg'
                        }
                        alt="button plus icon"
                      />
                      <span>Add Delivery Address</span>
                    </button>
                    <div style={{ color: '#484649' }}>
                      <p style={{ marginBlock: 20, fontWeight: 300 }}>
                        N/B: optional if not provided
                      </p>
                      <p>
                        If user provides an address for delivery kindly add
                        address.
                      </p>
                      <p style={{ marginTop: 10 }}>
                        This address will be set a default delivery address for
                        easier delivery.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="buttonHeading">
                      <h1>Delivery Location</h1>
                      <div className="buttonImage" onClick={handleButtonClick}>
                        <img
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678674215/button-cancel_ywkq8e.svg'
                          }
                        />
                        <button>Cancel</button>
                      </div>
                    </div>
                    <p style={{ marginBlock: 20, fontWeight: 300 }}>
                      N/B: optional if not provided
                    </p>
                    <h2
                      style={{
                        color: '#939094',
                        fontSize: 22,
                        position: 'relative',
                        top: 30,
                      }}>
                      Personal Location
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
                            className={arrow}
                            src={
                              'https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg'
                            }
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
                            className={arrow}
                            src={
                              'https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg'
                            }
                            alt="person icon"
                          />
                        </div>
                        <div className="inputLabel">
                          <label htmlFor="address1">Address &mdash; 1</label>
                          <input
                            // style={{ textIndent: 3 }}
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
                            // style={{ textIndent: 3 }}
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
                )}
                <div style={{ marginTop: 70, marginBottom: 20 }}>
                  <Button
                    buttonWidth="100%"
                    buttonHeight="52px"
                    text="Add Customer"
                    linkText="customers"
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

export default AddCustomer
