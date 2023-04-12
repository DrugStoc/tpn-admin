import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../shared/Card'
import Button from '../Button/Button'
import Motion from '../shared/Motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import NavbarAddMerchant from '../Navbar/NavbarSub'
import { useLocation } from 'react-router-dom'
import { MerchantsTableData } from './MerchantsTableData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const AddMerchant = ({ arrow }: any): JSX.Element => {
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const slug = pathArr[pathArr.length - 1]
  console.log(slug)
  console.log(MerchantsTableData)
  const merchatDetails = MerchantsTableData.find((item: any) => {
    return item.id === +slug
  })
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Obichukwu')
  const [phoneNumber, setPhoneNumber] = useState('+234 8143577878')
  const [email, setEmail] = useState('example@mail.com')
  console.log(merchatDetails)
  const [brandName, setBrandName] = useState(merchatDetails?.row[0]['column 2'])

  const text = 'Merchant Details'
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 100,
      },
    },
  }

  const labels = ['January', 'February', 'March']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1000, 3234, 1245],
        backgroundColor: '#5EA3D6',
        barThickness: 10,
      },
      {
        label: 'Dataset 2',
        data: [1235, 5521, 436],
        backgroundColor: '#258CF4',
        barThickness: 10,
      },
      {
        label: 'Dataset 3',
        data: [12253, 5456, 6587],
        backgroundColor: '#556AB0',
        barThickness: 10,
      },
    ],
  }

  return (
    <Motion>
      <div className="addMerchant">
        <Navbar nav="Merchants" arrow={arrow} text="Merchant Details" />
        <section className="addMerchant-section">
          <NavbarAddMerchant
            firstItem={text}
            forthItem="Deactivate Merchant"
            fifthItem="Delete Merchant"
            text={text}
          />
          <div className="addMerchant-merchant-detail">
            <Card className="card">
              <div className="cardBody">
                <h2
                  style={{
                    color: '#939094',
                    fontSize: 14,
                  }}>
                  Joined
                </h2>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    top: 28,
                    flexWrap: 'wrap',
                  }}>
                  <h2
                    style={{
                      color: '#484649',
                      fontSize: 16,
                    }}>
                    {merchatDetails?.row[4]['column 6']}
                  </h2>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 32,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 8,
                        color: '#514F6D',
                        cursor: 'pointer',
                      }}>
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678792113/pencil-edit_d0647v.svg"
                        width={24}
                        height={24}
                        alt="pencil edit icon"
                      />
                      <span>Edit</span>
                    </div>
                    <span style={{ color: '#939094', cursor: 'pointer' }}>
                      Save Changes
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: '1px solid #AEAAAE',
                    marginBlock: 30,
                    position: 'relative',
                    top: 18,
                  }}></div>
                <h2
                  style={{
                    color: '#939094',
                    fontSize: 22,
                    position: 'relative',
                    top: 15,
                  }}>
                  Personal Information
                </h2>
                <form>
                  <div className="form">
                    <div className="formInput">
                      <div className="inputLabel">
                        <label htmlFor="fname" style={{ display: 'block' }}>
                          Enter your First Name
                        </label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="Ex. Nick"
                          id="fname"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <img
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg'
                          }
                          alt="person icon"
                        />
                      </div>
                      <div className="inputLabel">
                        <label htmlFor="lname" style={{ display: 'block' }}>
                          Enter your Last Name
                        </label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="Ex. Jason"
                          id="lname"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
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
                      <div className="inputLabel">
                        <label htmlFor="pnumber">Enter your Phone Number</label>
                        <input
                          className="addMerchantInput"
                          autoComplete="off"
                          type="text"
                          placeholder="+234 0000000000"
                          id="pnumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <img
                          style={{ top: 58 }}
                          src={
                            'https://res.cloudinary.com/bizstak/image/upload/v1678674044/nigeria-flag_fbmag1.svg'
                          }
                          alt="nigeria icon"
                        />
                      </div>
                      <div className="inputLabel plInput">
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                      position: 'relative',
                      top: -15,
                    }}>
                    Pharmacy Details{' '}
                  </h2>
                  <div className="inputLabel">
                    <label htmlFor="brand">Enter Brand Name</label>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Ex. MedLab"
                      id="brand"
                      onChange={(e) => setBrandName(e.target.value)}
                      value={brandName}
                    />
                    <img
                      src={
                        'https://res.cloudinary.com/bizstak/image/upload/v1678776998/business_go9cse.svg'
                      }
                      alt="business icon"
                    />
                  </div>

                  <>
                    <div className="buttonHeading">
                      <h1>Delivery Location</h1>
                      {/* <div className="buttonImage" onClick={handleButtonClick}>
                        <img
                          src={
                            "https://res.cloudinary.com/bizstak/image/upload/v1678674215/button-cancel_ywkq8e.svg"
                          }
                          alt="cancel button"
                        />
                        <button>Cancel</button>
                      </div> */}
                    </div>
                    <h2
                      style={{
                        color: '#939094',
                        fontSize: 22,
                        position: 'relative',
                        top: 15,
                      }}>
                      Merchants Location
                    </h2>
                    {/* <p style={{ marginBlock: 20, fontWeight: 300 }}>
                      N/B: optional if not provided
                    </p> */}
                    <div className="deliveryForm">
                      <div className="form">
                        <div className="inputLabel">
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
                        <div className="inputLabel">
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
                        <div className="inputLabel">
                          <label htmlFor="address1">Address &mdash; 1</label>
                          <input
                            autoComplete="off"
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
                      text="Save Changes"
                      linkText={null}
                    />
                  </div>
                </form>
              </div>
            </Card>
          </div>
          <div className="addMerchantIdentity">
            <Card className="cardHeight">
              <div className="addMerchantDetail">
                <h2>
                  Purchase Made <br /> <span>from Sep 18 &mdash; Oct 18</span>
                </h2>
                <ul>
                  <li>1m</li>
                  <li>3m</li>
                  <li>6m</li>
                  <li>1yr</li>
                </ul>
              </div>
              <div className="addMerchantDetailChart">
                <div className="addMerchantDetailChartLiner">
                  <Bar options={options} data={data} />
                </div>
              </div>
            </Card>

            <Card className="cardHeight">
              <div className="addMerchantDetail">
                <h2>
                  Voucher Redeemed <br />{' '}
                  <span>from Sep 18 &mdash; Oct 18</span>
                </h2>
                <ul>
                  <li>1m</li>
                  <li>3m</li>
                  <li>6m</li>
                  <li>1yr</li>
                </ul>
              </div>
              <div className="addMerchantDetailChart">
                <div className="addMerchantDetailChartLiner">
                  <Bar options={options} data={data} />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Motion>
  )
}

export default AddMerchant
