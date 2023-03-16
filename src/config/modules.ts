import { general } from './general'
import login from './login'
import responsive from './responsive'
import sidebar from './sidebar'

const modules = {
  ...general,
  ...login,
  ...sidebar,
  ...responsive,
}

export { modules }
