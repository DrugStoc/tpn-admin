import addCustomer from './addCustomer'
import addMerchant from './addMerchant'
import addProduct from './addProduct'
import button from './button'
import card from './card'
import chart from './chart'
import dropdown from './dropdown'
import filter from './filter'
import { general } from './general'
import input from './input'
import login from './login'
import navbar from './navbar'
import overview from './overview'
import pagination from './pagination'
import responsive from './responsive'
import searched from './searched'
import sidebar from './sidebar'
import summary from './summary'
import table from './table'

const modules = {
  ...general,
  ...login,
  ...sidebar,
  ...navbar,
  ...overview,
  ...input,
  ...card,
  ...filter,
  ...button,
  ...summary,
  ...searched,
  ...chart,
  ...table,
  ...dropdown,
  ...pagination,
  ...addCustomer,
  ...addMerchant,
  ...addProduct,
  ...responsive,
}

export { modules }
