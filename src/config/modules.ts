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
  ...responsive,
}

export { modules }
