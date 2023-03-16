import login from './login'
import navbar from './navbar'
import overview from './overview'
import responsive from './responsive'
import sidebar from './sidebar'

const modules = {
  ...login,
  ...sidebar,
  ...navbar,
  ...overview,
  ...responsive,
}

export { modules }
