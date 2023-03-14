import button from './button'
import card from './card'
import { general } from './general'
import input from './input'
import login from './login'
import responsive from './responsive'
import table from './table'
import filter from './filter'
import navbar from './navbar'
import overview from './overview'
import sidebar from './sidebar'
import orders from './orders'
import customers from './customers'
import merchants from './merchants'
import products from './products'
import shippings from './shippings'
import error from './error'
import addCustomer from './addCustomer'
import addMerchant from './addMerchant'
import addProduct from './addProduct'
import addShipping from './addShipping'

const modules = {
  ...general,
  ...login,
  ...button,
  ...card,
  ...input,
  ...filter,
  ...navbar,
  ...table,
  ...sidebar,
  ...overview,
  ...orders,
  ...customers,
  ...merchants,
  ...products,
  ...shippings,
  ...error,
  ...addCustomer,
  ...addMerchant,
  ...addProduct,
  ...addShipping,
  ...responsive,
}

export { modules }
