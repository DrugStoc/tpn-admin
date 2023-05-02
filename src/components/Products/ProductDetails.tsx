import React, { useState, ChangeEvent } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../shared/Card'
import Button from '../Button/Button'
import Motion from '../shared/Motion'
import NavbarAddProduct from '../Navbar/NavbarSub'
import { ProductsTableData } from './ProductsTableData'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ arrow }: any): JSX.Element => {
  const { id }: any = useParams()
  const [isFalse, setIsFalse] = useState<boolean>(false)
  const productDetails = ProductsTableData.find((item: any) => {
    return item.id === +id
  })
  const name = productDetails?.row[0]['column 2']
  const price: any = productDetails?.row[1]['column 3']
  const [productName, setProductName] = useState(name)
  const [composition, setComposition] = useState('')
  const [formItem, setFormItem] = useState('')
  const [retailPrice, setRetailPrice] = useState(+price)
  const [discount, setDiscount] = useState('')
  const [state, setState] = useState('')
  const [sideEffect, setSideEffect] = useState('')
  const text = 'Product Details'

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setProductName(event.target.value)
  }

  const handleCompositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setComposition(event.target.value)
  }

  const handleFormItemChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormItem(event.target.value)
  }

  const handleRetailPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRetailPrice(+event.target.value)
  }

  const handleDiscountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDiscount(event.target.value)
  }

  const handleStateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState(event.target.value)
  }

  const handleSideEffectChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const target = event.target as HTMLTextAreaElement
    const value = target.value
    setSideEffect(value)
  }

  const handleFirstButton = (): any => {
    if (isFalse) {
      setIsFalse(false)
    }
  }

  const handleSecondButton = (): any => {
    if (!isFalse) {
      setIsFalse(true)
    }
  }

  return (
    <Motion>
      <div className="addProduct">
        <Navbar nav="Products" arrow={arrow} text="Product Details" />
        <section className="addProduct-section">
          <NavbarAddProduct
            firstItem={text}
            forthItem="Not available"
            fifthItem="Delete Product"
            text={text}
          />
          <Card className="card">
            <div className="cardBody">
              <div className="dot">
                <div>
                  <span
                    style={{ fontSize: 14, color: '#787579', fontWeight: 500 }}>
                    Product Added by
                  </span>
                  : <span style={{ color: '#484649' }}>You</span>
                </div>
                <div className="dots">
                  <div
                    onClick={handleFirstButton}
                    className={isFalse ? 'inactive' : 'active'}></div>
                  <div
                    onClick={handleSecondButton}
                    className={!isFalse ? 'inactive' : 'active'}></div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  margin: '20px 0 15px',
                }}>
                <div>
                  <span style={{ color: '#787579', fontWeight: 500 }}>
                    Added:
                  </span>{' '}
                  <strong>Fri 7 Oct, 15:18</strong>
                </div>
                <div
                  style={{
                    color: '#514F6D',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 8,
                    alignItems: 'center',
                  }}>
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1678792113/pencil-edit_d0647v.svg"
                    alt="oencil icon"
                  />
                  <span>Edit</span>
                </div>
              </div>
              <hr />
              {!isFalse ? (
                <div>
                  <Motion>
                    <h2
                      style={{
                        color: '#939094',
                        fontSize: 22,
                        position: 'relative',
                        top: 30,
                      }}>
                      Product Information
                    </h2>
                  </Motion>
                </div>
              ) : (
                <div>
                  <h2
                    style={{
                      color: '#939094',
                      fontSize: 22,
                      position: 'relative',
                      top: 30,
                    }}>
                    <Motion>Set Price</Motion>
                  </h2>
                </div>
              )}

              <form>
                {!isFalse ? (
                  <Motion className="form">
                    <div className="inputLabel">
                      <Motion>
                        <label htmlFor="nameProduct">Name of Product</label>
                      </Motion>
                      <Motion>
                        <input
                          type="text"
                          placeholder="Ex. Nick"
                          id="nameProduct"
                          value={productName}
                          onChange={handleProductNameChange}
                        />
                      </Motion>
                      <Motion>
                        <img
                          src="https://res.cloudinary.com/bizstak/image/upload/v1678673980/input-person_swmij3.svg"
                          alt="Ex. Panadol"
                        />
                      </Motion>
                    </div>
                    <Motion className="inputLabel">
                      <label htmlFor="composition">Composition</label>
                      <input
                        type="text"
                        placeholder="Ex. Jason"
                        id="composition"
                        value={composition}
                        onChange={handleCompositionChange}
                      />
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678787110/bubble-chart_v8hk4z.svg"
                        alt="Ex. Chlorine....."
                      />
                    </Motion>
                    <Motion className="inputLabel">
                      <label htmlFor="chooseForm">Choose a form</label>
                      <input
                        type="text"
                        placeholder="Tablet"
                        id="chooseForm"
                        value={formItem}
                        onChange={handleFormItemChange}
                      />
                      <img
                        style={{ top: 55 }}
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678787147/auto-fix-normal_zlj9sz.svg"
                        alt="nigeria icon"
                      />
                      <img
                        className="arrow"
                        src="https://res.cloudinary.com/bizstak/image/upload/v1678674269/arrow-dropdown_bpoc6g.svg"
                        alt="drop-down icon"
                      />
                    </Motion>
                  </Motion>
                ) : (
                  <div className="form">
                    <Motion className="inputLabel">
                      <label htmlFor="retailPrice">Retail Price</label>
                      <input
                        style={{ textIndent: 75 }}
                        type="number"
                        placeholder="1500"
                        id="retailPrice"
                        value={retailPrice}
                        onChange={handleRetailPriceChange}
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
                    </Motion>
                  </div>
                )}

                <>
                  {!isFalse ? (
                    <Motion>
                      <h2
                        style={{
                          color: '#939094',
                          fontSize: 22,
                          position: 'relative',
                          top: 30,
                        }}>
                        Other info.
                      </h2>
                    </Motion>
                  ) : (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                        }}>
                        <div>
                          <Motion>
                            <label
                              htmlFor="discount"
                              style={{
                                color: '#1F1C19',
                                marginTop: 30,
                                marginBottom: 10,
                                display: 'block',
                              }}>
                              Discounted Price
                            </label>
                          </Motion>
                          <Motion>
                            <p
                              className="discount"
                              style={{
                                width: '60%',
                                color: '#484649',
                                fontSize: 13,
                                fontFamily: 'Poppins, sans-serif',
                              }}>
                              By enabling a discounted price, a voucher is
                              automatically added and a QR CODE is generated.
                            </p>
                          </Motion>
                        </div>
                        <Motion>
                          <img
                            src="https://res.cloudinary.com/bizstak/image/upload/v1678576482/toggle-off_trg38c.svg"
                            alt="toggling button icon"
                            height={40}
                            width={40}
                          />
                        </Motion>
                      </div>
                      <div className="inputLabel">
                        <div>
                          <Motion>
                            <input
                              style={{ textIndent: 75 }}
                              type="number"
                              placeholder="1500"
                              id="discount"
                              value={discount}
                              onChange={handleDiscountChange}
                            />
                          </Motion>
                          <div style={{ position: 'relative' }}>
                            <Motion>
                              <img
                                src="https://res.cloudinary.com/bizstak/image/upload/v1678674044/nigeria-flag_fbmag1.svg"
                                alt="nigeria icon"
                                style={{ position: 'absolute', top: -28 }}
                              />
                            </Motion>
                            <Motion>
                              <p
                                style={{
                                  position: 'absolute',
                                  color: '#787579',
                                  left: 47,
                                  top: -33,
                                }}>
                                NGN
                              </p>
                            </Motion>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {!isFalse ? (
                    <Motion className="deliveryForm">
                      <div className="form">
                        <div className="inputLabel">
                          <label htmlFor="state">Select a state</label>
                          <input
                            className="inputDelivery"
                            type="text"
                            placeholder="e.g, cough, pains"
                            id="state"
                            value={state}
                            onChange={handleStateChange}
                          />
                        </div>
                        <div className="inputLabel">
                          <div>
                            <label htmlFor="sideEffect">
                              Side Effects (e.g. dizziness)
                            </label>
                          </div>
                          <textarea
                            id="sideEffect"
                            className="textarea"
                            name="postContent"
                            rows={10}
                            cols={40}
                            placeholder="type here..."
                            value={sideEffect}
                            onChange={handleSideEffectChange}
                          />
                        </div>
                      </div>
                    </Motion>
                  ) : null}
                </>

                <div
                  style={{ marginTop: 70, marginBottom: 20 }}
                  onClick={handleSecondButton}
                  className={!isFalse ? 'inactive' : 'active'}>
                  {!isFalse ? (
                    <button
                      type="button"
                      style={{
                        color: 'rgb(0, 0, 0)',
                        backgroundColor: 'rgb(217, 217, 217)',
                        width: '100%',
                        borderRadius: 4,
                        border: '0.0625rem solid rgb(217, 217, 217)',
                        fontSize: 14,
                        cursor: 'pointer',
                        height: 52,
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: 8,
                        }}>
                        <span>Continue</span>
                        <img
                          src="https://res.cloudinary.com/bizstak/image/upload/v1678787065/arrow-next_tlywqx.svg"
                          alt="button"
                        />
                      </div>
                    </button>
                  ) : (
                    <Button
                      buttonWidth="100%"
                      buttonHeight="52px"
                      text="Save Changes"
                      linkText="products"
                    />
                  )}
                </div>
              </form>
            </div>
          </Card>
        </section>
      </div>
    </Motion>
  )
}

export default ProductDetails
