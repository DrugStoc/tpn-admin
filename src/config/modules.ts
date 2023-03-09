import { responsive } from './responsive'
import { general } from './general'
import { login } from './login'

const modules = {
  ...general,
  ...login,
  ...responsive,
}

export { modules }
