import button from './button'
import card from './card'
import filter from './filter'
import { general } from './general'
import input from './input'
import login from './login'
import navbar from './navbar'
import overview from './overview'
import responsive from './responsive'
import sidebar from './sidebar'

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
  ...responsive,
}

export { modules }
