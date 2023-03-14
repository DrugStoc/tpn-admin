import { useContext, useState } from 'react'
import Nav from '../Navbar/Navbar'
import LoginContext from '../../context/LoginContext'
import Card from '../shared/Card'
import Motion from '../shared/Motion'
import { useParams } from 'react-router-dom'
import { CustomersTableData } from '../Customers/CustomersTableData'

const CustomersDetail = ({ arrow }: any): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  console.log(CustomersTableData)

  const { id }: any = useParams()
  const findId: any = CustomersTableData.find((item: any) => {
    return item.id === +id
  })

  const [firstName, setFirstName] = useState(findId.row[0]['column 2'])
  const [lastNameName, setLastNameName] = useState(findId.row[1]['column 3'])
  const [phoneNumber, setPhoneNumber] = useState(findId.row[3]['column 5'])
  const [email, setEmail] = useState(findId.row[2]['column 4'])

  const handleFirstNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLastNameName(e.target.value)
  }

  const handlePhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPhoneNumber(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`
  return (
    <Motion>
      <div
        className='addCustomer'
        style={{ width: 'calc(100% - 200px)', marginLeft: 'auto' }}>
        <Nav
          dayTimed={dayTimer}
          dayTimer={dayTime}
          nav="Customer"
          arrow={arrow}
          text="Customer Details"
        />
        <section className='addCustomer-section'>
          <Card className='card'>
            <div className='cardBody'>
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
                }}>
                <h2
                  style={{
                    color: '#484649',
                    fontSize: 16,
                  }}>
                  {findId.row[4]['column 6']}
                </h2>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 32,
                    alignItems: 'center',
                  }}>
                  <div style={{ display: 'flex', gap: 8, color: '#514F6D' }}>
                    <img
                      src={"https://res.cloudinary.com/bizstak/image/upload/v1678792113/pencil-edit_d0647v.svg"}
                      width={24}
                      height={24}
                      alt="pencil edit icon"
                    />
                    <span>Edit</span>
                  </div>
                  <span style={{ color: '#939094' }}>Save Changes</span>
                </div>
              </div>
              <div
                style={{
                  borderBottom: '1px solid #AEAAAE',
                  marginBlock: 30,
                  position: 'relative',
                  top: 18,
                }}></div>
              <form>
                <div className='form'>
                  <div className='inputLabel'>
                    <label htmlFor="fname">Enter your First Name</label>
                    <input
                      type="text"
                      placeholder="Ex. Nick"
                      id="fname"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                    <img src={"https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg"} alt="person icon" />
                  </div>
                  <div className='inputLabel'>
                    <label htmlFor="lname">Enter your Last Name</label>
                    <input
                      type="text"
                      placeholder="Ex. Jason"
                      id="lname"
                      onChange={handleLastNameChange}
                      value={lastNameName}
                    />
                    <img src={"https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg"} alt="person icon" />
                  </div>
                  <div className='inputLabel'>
                    <label htmlFor="pnumber">Enter your Phone Number</label>
                    <input
                      type="text"
                      placeholder="+234 0000000000"
                      id="pnumber"
                      onChange={handlePhoneNumberChange}
                      value={phoneNumber}
                    />
                    <img
                      style={{ top: 58 }}
                      src={"https://res.cloudinary.com/bizstak/image/upload/v1678674044/nigeria-flag_fbmag1.svg"}
                      alt="nigeria icon"
                    />
                  </div>
                  <div className='inputLabel'>
                    <label htmlFor="eaddress">Enter your email address</label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      id="eaddress"
                      alt="email icon"
                      onChange={handleEmailChange}
                      value={email}
                    />
                    <img src={"https://res.cloudinary.com/bizstak/image/upload/v1678674085/input-mail_tvwwz3.svg"} alt="email icon" />
                  </div>
                </div>
                <div className='addDelivery'>
                  <div style={{ color: '#484649' }}>
                    <p style={{ marginBlock: 20, fontWeight: 300 }}>
                      N/B: optional if not provided
                    </p>
                  </div>
                </div>

                <>
                  <div className='buttonHeading'>
                    <h1>Delivery Location</h1>
                    {/* <div
                      className='buttonImage'
                      onClick={handleButtonClick}>
                      <img src={buttonCancel} />
                      <button>Cancel</button>
                    </div> */}
                  </div>
                  <p style={{ marginBlock: 20, fontWeight: 300 }}>
                    N/B: optional if not provided
                  </p>

                  <div className='deliveryForm'>
                    <div className='form'>
                      <div className='inputLabel'>
                        <label htmlFor="state">Select a state</label>
                        <input
                          className='inputDelivery'
                          type="text"
                          placeholder="Select State"
                          id="state"
                        />
                        <img
                          className='arrow'
                          src={"https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg"}
                          alt="person icon"
                        />
                      </div>
                      <div className='inputLabel'>
                        <label htmlFor="lga">Select your LAG</label>
                        <input
                          className='inputDelivery'
                          type="text"
                          placeholder="Ex. Jason"
                          id="lga"
                        />
                        <img
                          className='arrow'
                          src={"https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg"}
                          alt="person icon"
                        />
                      </div>
                      <div className='inputLabel'>
                        <label htmlFor="address1">Address &mdash; 1</label>
                        <input
                          className='inputDelivery'
                          type="text"
                          placeholder="Ex. No9, Street name"
                          id="address1"
                        />
                      </div>
                      <div className='inputLabel'>
                        <label htmlFor="address2">
                          Address &mdash; 2 (optional)
                        </label>
                        <input
                          className='inputDelivery'
                          type="text"
                          placeholder="Ex. No9, Street name"
                          id="address2"
                          alt="email icon"
                        />
                      </div>
                    </div>
                  </div>
                </>
              </form>
            </div>
          </Card>
        </section>
      </div>
    </Motion>
  )
}

export default CustomersDetail
