import button from './button'
import card from './card'
import chart from './chart'
import filter from './filter'
import { general } from './general'
import input from './input'
import login from './login'
import navbar from './navbar'
import overview from './overview'
import responsive from './responsive'
import searched from './searched'
import sidebar from './sidebar'
import summary from './summary'

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
  ...responsive,
}

export { modules }
